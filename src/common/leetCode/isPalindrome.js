/**
 * 回文数
 * @param {number} x
 * @return {boolean}
 */
// 基础使用字符串
export const isPalindrome1 = function (x) {
  return x.toString() === x.toString().split('').reverse().join('')
}

// 优化使用数字反转 将整数求模得到尾数，之后每求一次模，都再原数上添加一位(通过*10来得到）
export const isPalindrome2 = function (x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false
  } else if (x >= 0 && x < 10) {
    return true
  }
  let y = x
  let num = 0
  while (x !== 0) {
    num = x % 10 + num * 10
    x = Math.floor(x / 10)
  }
  return y === num
}
