<template>
  <div>
    <h1>题目：旋转字符串</h1>
    <h4>描述：给定两个字符串A和B。A的旋转操作就是将A最左边的字符移动到最右边。例如，若 A = 'abcde'，在移动一次之后结果就是 'bcdea'。如果在若干次旋转操作之后，A能变成B，那么返回True，否则返回false。</h4>
    <p>思路：
      字符串A*2，进行查询是否包含操作
    </p>
    <high-light language="language-javascript"> {{ msg }} </high-light>
  </div>
</template>

<script>
import { rotateString } from '@/common/leetCode/rotateString.js'
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
    let A = 'abcde'
    let B = 'cdeab'
    let result = rotateString(A, B)
    console.log(result)

    this.msg = `
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
    `
  }
}
</script>

<style lang='scss' scoped>
</style>
