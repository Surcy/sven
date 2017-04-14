/**
 * Created by admin on 2017/4/13.
 */
export function formatDateTime (date) {
  //格式化时间戳
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  var d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  var h = date.getHours()
  var minute = date.getMinutes()
  minute = minute < 10 ? ('0' + minute) : minute
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute
}
export function test (a) {
  return `${a}aaaa`
}
