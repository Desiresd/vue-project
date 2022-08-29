<template>
  <div>
    <h1>题目：重复的DNA序列</h1>
    <h4>描述：所有 DNA 都由一系列缩写为 A，C，G 和 T 的核苷酸组成。例如，'ACGAATTCCG'。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。缩写一个函数来查找目标子串，目标子串的长度为 10，且在DNA字符串 s 中出现次数超过一次。</h4>
    <p>思路：
      使用Map对象存储长度为10的字串，{ 字串：出现次数 }，for循环长度-10的操作
    </p>
    <high-light language="language-javascript"> {{ msg }} </high-light>
  </div>
</template>

<script>
import { findRepeatedDnaSequences } from '@/common/leetCode/findRepeatedDnaSequences.js'
import HighLight from '@/components/lis/HighLight'
export default {
  name: 'findRepeatedDnaSequences',
  components: {
    HighLight
  },
  data () {
    return {
      msg: ''
    }
  },
  created () {
    let str = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'
    let result = findRepeatedDnaSequences(str)
    console.log(result)

    this.msg = `
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
    `
  }
}
</script>

<style lang='scss' scoped>
</style>
