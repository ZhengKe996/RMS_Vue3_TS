import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

/**
 *
 * @param utcSting 外部传入的 utc字符串
 * @param format 格式化的格式
 * @returns 返回格式化后的日期
 */

export function formatUtcString(utcSting: string, format: string = DATE_TIME_FORMAT) {
  return dayjs.utc(utcSting).utcOffset(8).format(format)
}
