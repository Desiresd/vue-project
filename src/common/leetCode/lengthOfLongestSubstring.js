/**
 * 无重复字符的最长字串
 * @param {string} s
 * @return {number}
 *
 * 输入 s = 'abcabcbb'
 * 输出 3
 * 原因 因为无重复字符的最长子串是 'abc'，所以其长度为3
 */
export const lengthOfLongestSubstring = function (s) {
  let maxLen = 0
  let str = ''
  for (let node of s) {
    let index = str.indexOf(node)
    str = str.substring(index + 1) + node
    maxLen = Math.max(maxLen, str.length)
  }
  return maxLen
}
