<template>
  <div>
    <h1>题目：无重复字符的最长字串</h1>
    <h4>描述：
      给定一个字符串 s，请你找出其中不含有重复字符的最大字串的长度
    </h4>
    <p>思路：
      利用字符串是否存在重复进行截取以及字符串拼接。相当于队列（先进先出）
    </p>
    <high-light language="language-javascript"> {{ msg }} </high-light>
  </div>
</template>

<script>
import { lengthOfLongestSubstring } from '@/common/leetCode/lengthOfLongestSubstring.js'
import HighLight from '@/components/lis/HighLight'
export default {
  name: 'lengthOfLongestSubstring',
  components: {
    HighLight
  },
  data () {
    return {
      msg: ''
    }
  },
  created () {
    let s = 'pwwkewq'
    let maxLen = lengthOfLongestSubstring(s)
    console.log('maxLen: ' + maxLen)

    this.msg = `
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
    `
  }
}
</script>

<style lang='scss' scoped>
</style>
