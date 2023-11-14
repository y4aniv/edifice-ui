import { useCallback, useEffect, useState } from "react";

import { Dayjs } from "dayjs";

import { type CoreDate, dayjs } from "../../utils";
import { useSession } from "../useSession";

/**
 * Hook to compute user-friendly dates from various format.
 */
export default function useDate() {
  // Current language
  const [lang, setLang] = useState<string>("fr");
  const sessionQuery = useSession();

  /* Utility function */
  function parseDate(date: string, lang?: string): Dayjs {
    if (date.length < 11) return dayjs(date, ["YYYY-MM-DD"], lang);

    // Check if the string is exclusively made of digits
    if (date.split("").findIndex((char) => "0" > char || char > "9") < 0) {
      // => it should be a number of elapsed milliseconds since 1970-01-01, as a string.
      return dayjs(Number.parseInt(date));
    } else {
      // Otherwise, it should be an ISO 8601 date.
      return dayjs(date);
    }
  }

  /** Compute a user-friendly elapsed duration, between now and a date. */
  const fromNow = useCallback(
    (date: CoreDate): string => {
      let computedDate: Dayjs = dayjs();
      try {
        if ("undefined" === typeof date) {
          return "";
        } else if ("string" === typeof date) {
          computedDate = parseDate(date, lang);
        } else if ("number" === typeof date.$date) {
          computedDate = dayjs(new Date(date.$date));
        } else if ("string" === typeof date.$date) {
          computedDate = parseDate(date.$date, lang);
        }

        return computedDate.isValid()
          ? computedDate.locale(lang).fromNow()
          : "";
      } catch (e) {
        return "";
      }
    },
    [lang],
  );

  useEffect(() => {
    setLang(sessionQuery?.data?.currentLanguage || "fr");
  }, [sessionQuery?.data, setLang]);

  return {
    fromNow,
  };
}
