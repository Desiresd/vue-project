<template>
  <div>
    <h1>题目：两数相加求目标值</h1>
    <p>思路：
      使用Map对象的 has() 和 set() 方法实现，循环数组，进行（目标值 - 数组值）的运算，不匹配时以{ 数组值: 数组下标 } 方式存入Map对象，直到找出匹配的两个数组下标。
    </p>
    <high-light language="language-javascript"> {{ msg }} </high-light>
  </div>
</template>

<script>
import { twoSum } from '@/common/leetCode/twoSum.js'
import HighLight from '@/components/lis/HighLight'
export default {
  name: 'twoSum',
  components: {
    HighLight
  },
  data () {
    return {
      msg: ''
    }
  },
  created () {
    let nums = [2, 7, 11, 15]
    let target = 9
    let a = twoSum(nums, target)
    console.log(a)

    this.msg = `
      // Given nums = [2, 7, 11, 15], target = 9
      // Because nums[0] + nums[1] = 2 + 7 = 9
      // return [0, 1]

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
    `
  }
}
</script>

<style lang='scss' scoped>
</style>
