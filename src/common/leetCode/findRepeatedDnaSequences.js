/**
 * 重复的DNA序列
 * @param {*} str
 *
 * 输入 ste = 'AAAAACCCCCAAAAACCCCCAAAAAGGGTTT'
 * 输出 ['AAAAACCCCC', 'CCCCCAAAAA']
 * 原因 数组中的值重复出现两次
 */

export const findRepeatedDnaSequences = function (str) {
  let map = new Map()
  let arr = []
  for (let i = 0; i <= str.length - 10; i++) {
    let sub = str.substring(i, i + 10)
    if (!map.has(sub)) {
      map.set(sub, 1)
    } else if (map.get(sub) === 1) {
      map.set(sub, 2)
      arr.push(sub)
    } else {
      map.set(sub, map.get(sub) + 1)
    }
  }
  console.log(map)
  return arr
}
