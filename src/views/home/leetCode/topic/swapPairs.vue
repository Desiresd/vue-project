<template>
  <div>
    <h1>题目：两两交换链表中的节点</h1>
    <h4>描述：给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。你不能知识单纯的改变节点内部的值，而是需要实际的进行节点的交换。</h4>
    <p>思路：在给定的链表前面添加一个假节点，使用while遍历链表使其相邻两两节点进行交换。
    </p>
    <high-light language="language-javascript"> {{ msg }} </high-light>
  </div>
</template>

<script>
import { ListNode } from '@/common/leetCode/ListNode.js'
import { swapPairs } from '@/common/leetCode/swapPairs.js'
import HighLight from '@/components/lis/HighLight'
export default {
  name: 'swapPairs',
  components: {
    HighLight
  },
  data () {
    return {
      msg: ''
    }
  },
  created () {
    let l1 = new ListNode(1)
    let dummy1 = l1
    dummy1.next = new ListNode(2); dummy1 = dummy1.next
    dummy1.next = new ListNode(3); dummy1 = dummy1.next
    dummy1.next = new ListNode(4); dummy1 = dummy1.next
    console.log(l1)

    let result = swapPairs(l1)
    console.log(result)

    this.msg = `
      /**
       * 两两交换链表中的节点
       * @param {*} l1
       *
       * 输入 1 -> 2 -> 3 -> 4
       * 输出 2 -> 1 -> 4 -> 3
       */
      import { ListNode } from './ListNode'
      export const swapPairs = function (l1) {
        let dummy = new ListNode()
        dummy.next = l1
        let current = dummy
        while (current.next !== null && current.next.next !== null) {
          let n1 = current.next
          let n2 = current.next.next
          current.next = n2
          n1.next = n2.next
          n2.next = n1
          current = n1
        }
        return dummy.next
      }
    `
  }
}
</script>

<style lang='scss' scoped>
</style>
