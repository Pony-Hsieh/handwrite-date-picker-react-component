import dayjs from 'dayjs';

/** 該月有幾天 */
export function getDatesOfMonth(year, month) {
  return dayjs(`${year}-${month}`).daysInMonth();
}

/** 該月第一天是星期幾 */
export function getFirstDayOfMonth(year, month) {
  return dayjs(`${year}-${month}-1`).day();
}
