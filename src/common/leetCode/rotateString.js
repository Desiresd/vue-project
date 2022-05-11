/**
 * 旋转字符串
 * @param {*} A
 * @param {*} B
 *
 * 输入 A = 'abcde', B = 'cdeab'
 * 输出 true
 * 原因 旋转过程中 A==B
 *
 * 输入 A = 'abcde', B = 'abced'
 * 输出 false
 * 原因 旋转过程中 A!=B
 */

export const rotateString = function (A, B) {
  if (A.length !== B.length) {
    return false
  }
  let str = A + A
  return str.includes(B)
}
