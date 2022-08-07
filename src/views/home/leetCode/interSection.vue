<template>
  <div>
    <h1>题目：给定两个数组，编写一个函数来计算他们的交集</h1>
    <p>思路：
      遍历第一个数组，查看第二个数组中是否存在相同的值，如果存在，则存入Set集合。
    </p>
    <high-light language="language-javascript"> {{ msg }} </high-light>
  </div>
</template>

<script>
import { interSection1, interSection2 } from '@/common/leetCode/interSection.js'
import HighLight from '@/components/lis/HighLight'
export default {
  name: 'interSection',
  components: {
    HighLight
  },
  data () {
    return {
      msg: ''
    }
  },
  created () {
    let nums1 = [2, 7, 11, 15]
    let nums2 = [7, 7, 3, 11]
    console.log(interSection1(nums1, nums2))
    console.log(interSection2(nums1, nums2))

    this.msg = `
      /**
       * @param {*} nums1
       * @param {*} nums2
       *
       * Given nums1 = [2, 7, 11, 15], nums2 = [7, 7, 3, 11]
       * return [7, 11]
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

      // 优化版 Set/Map 中has - 复杂度为 O(1)
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
    `
  }
}
</script>

<style lang='scss' scoped>
</style>
