/**
 * 水果成篮
 * @param {*} tree
 *
 * 输入 [3,3,3,1,2,1,1,2,3,3,4]
 * 输出 5 Max为(1,2,1,1,2)
 */

export const totalFruit = function (tree) {
  let map = new Map()
  let max = 1
  let j = 0
  for (let i = 0; i < tree.length; i++) {
    map.set(tree[i], i)
    if (map.size > 2) {
      let minIndex = tree.length - 1
      for (let value of map.values()) {
        if (value < minIndex) {
          minIndex = value
        }
      }
      map.delete(tree[minIndex])
      j = minIndex + 1
    }
    max = Math.max(max, i - j + 1)
  }
  return max
}
