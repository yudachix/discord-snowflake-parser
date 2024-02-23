import { extend } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import localizedFormat from "dayjs/plugin/localizedFormat";
import advancedFormat from "dayjs/plugin/advancedFormat";
import "dayjs/locale/ja";

extend(utc);
extend(timezone);
extend(localizedFormat);
extend(advancedFormat);

export { default } from "dayjs";
