import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import relativeTime from "dayjs/plugin/relativeTime";

import "dayjs/locale/de";
import "dayjs/locale/es";
import "dayjs/locale/pt";
import "dayjs/locale/fr";
import "dayjs/locale/it";

dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

type MongoDate = {
    $date: number | string;
};
type IsoDate = string; // "2021-03-24T16:36:05.398" or "1980-01-13"

/** Date formats we are going to deal with. */
type CoreDate = IsoDate | MongoDate;

export { type CoreDate, dayjs };
