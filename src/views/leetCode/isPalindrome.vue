<template>
  <div>
    <h1>题目：回文数</h1>
    <h4>描述：
      给你一个整数 x，如果 x 是一个回文整数，返回true；否则，返回false。
      回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
    </h4>
    <p>思路：
      1、可以使用字符串反转判断（基础）
      2、可以使用整数反转判断（优化）
    </p>
    <high-light language="language-javascript"> {{ msg }} </high-light>
  </div>
</template>

<script>
import { isPalindrome1, isPalindrome2 } from '@/common/leetCode/isPalindrome.js'
import HighLight from '@/components/lis/HighLight'
export default {
  name: 'isPalindrome',
  components: {
    HighLight
  },
  data () {
    return {
      msg: ''
    }
  },
  created () {
    let x = 12321
    console.log(isPalindrome1(x))
    console.log(isPalindrome2(x))

    this.msg = `
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
    `
  }
}
</script>

<style lang='scss' scoped>
</style>
