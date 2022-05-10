/**
 * 两数相加得到目标值
 * @param {*} nums
 * @param {*} target
 *
 * 输入 nums = [2, 7, 11, 15], target = 9
 * 输出 [0, 1]
 * 原因 nums[0] + nums[1] = 2 + 7 = 9
 */

export const twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      return [map.get(complement), i]
    } else {
      map.set(nums[i], i)
    }
  }
}
