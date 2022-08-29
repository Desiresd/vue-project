<template>
  <div>
    <h1>题目：两数相加</h1>
    <h4>描述：给定两个非空的链表用来表示两个非负数的整数。其中，它们各自的位数是按照逆序的方式存储的，并且它们的
      每个节点只能存储一位数字。如果我们将这两个数相加起来，则会返回一个新的链来表示它们的和。你可以假设除了数字0之外，
      这两个数都不会以0开头。
    </h4>
    <p>思路：两个非空的链表可以通过new LisNode()进行构造，使用.next进行添加指向。使用while迭代链表，使其节点进行相加，直到没有下一个节点。超出10进位处理，使用carry加1处理。
    </p>
    <high-light language="language-javascript"> {{ msg }} </high-light>
  </div>
</template>

<script>
import { ListNode } from '@/common/leetCode/ListNode.js'
import { addTwoNumbers } from '@/common/leetCode/addTwoNumbers.js'
import HighLight from '@/components/lis/HighLight'
export default {
  name: 'addTwoNumbers',
  components: {
    HighLight
  },
  data () {
    return {
      msg: ''
    }
  },
  created () {
    let l1 = new ListNode(2)
    let dummy1 = l1
    dummy1.next = new ListNode(4); dummy1 = dummy1.next
    dummy1.next = new ListNode(3); dummy1 = dummy1.next

    let l2 = new ListNode(5)
    let dummy2 = l2
    dummy2.next = new ListNode(6); dummy2 = dummy2.next
    dummy2.next = new ListNode(4); dummy2 = dummy2.next

    console.log(l1)
    console.log(l2)

    let result = addTwoNumbers(l1, l2)
    console.log(result)

    this.msg = `
      /**
       * 两数相加
       * @param {*} l1
       * @param {*} l2
       *
       * 输入 (2 -> 4 -> 3), (5 -> 6 -> 4)
       * 输出 7 -> 0 -> 8
       * 原因 342 + 465 = 807
       */
      import { ListNode } from './ListNode.js'
      export const addTwoNumbers = function (l1, l2) {
        let dummy = new ListNode()
        let curr = dummy
        let carry = 0

        while (l1 != null || l2 != null) {
          let sum = 0
          if (l1 !== null) {
            sum += l1.val
            l1 = l1.next
          }
          if (l2 !== null) {
            sum += l2.val
            l2 = l2.next
          }
          sum += carry
          curr.next = new ListNode(sum % 10) // 取余 | 模运算符
          carry = Math.floor(sum / 10) // Math.floor向下取整 ~ Math.ceil()向上取整
          curr = curr.next
        }

        if (carry > 0) {
          curr.next = new ListNode(carry)
        }
        return dummy.next
      }

      // 创建单向链表
      export class ListNode {
        constructor (val) {
          this.val = val
          this.next = undefined
        }
      }

      // 创建非空链表
      import { ListNode } from './ListNode.js'
      let l1 = new ListNode(2)
      let dummy1 = l1
      dummy1.next = new ListNode(4); dummy1 = dummy1.next
      dummy1.next = new ListNode(3); dummy1 = dummy1.next

      let l2 = new ListNode(5)
      let dummy2 = l2
      dummy2.next = new ListNode(6); dummy2 = dummy2.next
      dummy2.next = new ListNode(4); dummy2 = dummy2.next

      console.log(l1)
      console.log(l2)
    `
  }
}
</script>

<style lang='scss' scoped>
</style>
