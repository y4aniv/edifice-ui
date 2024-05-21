import { useCallback } from "react";

import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import relativeTime from "dayjs/plugin/relativeTime";

import "dayjs/locale/de";
import "dayjs/locale/es";
import "dayjs/locale/fr";
import "dayjs/locale/it";
import "dayjs/locale/pt";
import { useOdeClient } from "../OdeClientProvider";

dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

export type MongoDate = {
  $date: number | string;
};
export type IsoDate = string; // "2021-03-24T16:36:05.398" or "1980-01-13"

/** Date formats we are going to deal with. */
export type CoreDate = IsoDate | MongoDate;

/**
 * Hook to compute user-friendly dates from various format.
 */
export default function useDate() {
  // Current language
  const { currentLanguage } = useOdeClient();

  /* Utility function */
  const parseDate = useCallback(
    (date: string, lang?: string): Dayjs => {
      if (date.length < 11) return dayjs(date, ["YYYY-MM-DD"], lang);

      // Check if the string is exclusively made of digits
      if (date.split("").findIndex((char) => "0" > char || char > "9") < 0) {
        // => it should be a number of elapsed milliseconds since 1970-01-01, as a string.
        return dayjs(Number.parseInt(date)).locale(currentLanguage as string);
      } else {
        // Otherwise, it should be an ISO 8601 date.
        let day = dayjs(date).locale(currentLanguage as string);
        if (!day.isValid()) {
          // If invalid, try custom parsings (https://day.js.org/docs/en/parse/string-format)
          day = dayjs(date, ["YYYY-MM-DD HH:mm:ss.SSS"]).locale(
            currentLanguage as string,
          );
        }
        return day;
      }
    },
    [currentLanguage],
  );

  /** Compute a user-friendly elapsed duration, between now and a date. */
  const fromNow = useCallback(
    (date: CoreDate): string => {
      console.log("date", { date: typeof date });
      let computedDate: Dayjs = dayjs();
      try {
        if ("undefined" === typeof date) {
          return "";
        } else if ("string" === typeof date) {
          computedDate = parseDate(date);
        } else if ("number" === typeof date) {
          computedDate = dayjs(date).locale(currentLanguage as string);
        } else if ("number" === typeof date.$date) {
          computedDate = dayjs(new Date(date.$date)).locale(
            currentLanguage as string,
          );
        } else if ("string" === typeof date.$date) {
          computedDate = parseDate(date.$date);
        }

        console.log({ computedDate: computedDate.fromNow() });

        return computedDate.isValid() ? computedDate.fromNow() : "";
      } catch (e) {
        return "";
      }
    },
    [currentLanguage, parseDate],
  );

  const formatDate = useCallback(
    (date: CoreDate, format?: string): string => {
      let computedDate: Dayjs = dayjs();

      try {
        if ("undefined" === typeof date) {
          return "";
        } else if ("string" === typeof date) {
          computedDate = parseDate(date);
        } else if ("number" === typeof date.$date) {
          computedDate = dayjs(new Date(date.$date)).locale(
            currentLanguage as string,
          );
        } else if ("string" === typeof date.$date) {
          computedDate = parseDate(date.$date);
        }

        return computedDate.isValid()
          ? computedDate
              .locale(currentLanguage as string)
              .format(format || "D MMMM YYYY HH:mm:ss")
          : "";
      } catch (e) {
        return "";
      }
    },
    [currentLanguage, parseDate],
  );

  return {
    fromNow,
    formatDate,
  };
}
