
import Moment from 'moment'
/**
 *
 * 日期 Moment 转换
 *
*/

// String 转成 Moment
function momentDate (value, format = 'YYYY-MM-DD') {
  if (!!value === false) return null
  return Moment(value, format)
}

// Moment 转成 String
function momentStr (value, format = 'YYYY-MM-DD') {
  if (!!value === false) return null
  return Moment(value).format(format)
}

export {momentDate, momentStr}
