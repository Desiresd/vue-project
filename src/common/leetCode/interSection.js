/**
 * 给定两个数组，编写一个函数来计算他们的交集
 * @param {*} nums1
 * @param {*} nums2
 *
 * 输入 nums1 = [2, 7, 11, 15], nums2 = [7, 7, 3, 11]
 * 输出 [7, 11]
 */

// 基础版 数组搜索值includes - 复杂度为 O(n)
export const interSection1 = function (nums1, nums2) {
  let result = new Set()
  for (let num of nums1) {
    if (nums2.includes(num)) {
      result.add(num)
    }
  }
  return Array.from(result)
}

// 优化版 Set/Map中has - 复杂度为 O(1)
export const interSection2 = function (nums1, nums2) {
  let result = new Set()
  let nums = new Set(nums2)
  for (let num of nums1) {
    if (nums.has(num)) {
      result.add(num)
    }
  }
  return [...result]
}
