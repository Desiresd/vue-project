<template>
  <div>
    <h1>题目：反转链表</h1>
    <h4>描述：反转一个单链表</h4>
    <p>思路：可以迭代或者递归地反转链表
    </p>
    <high-light language="language-javascript"> {{ msg }} </high-light>

    <h1>题目：根据位置反转链表</h1>
    <h4>描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转</h4>
    <p>思路：反转 m 到 n 之间的链表，将反转后的链表与原链表拼接</p>
    <high-light language="language-javascript"> {{ msgR }} </high-light>
  </div>
</template>

<script>
import { ListNode } from '@/common/leetCode/ListNode.js'
import { reverseList, reverseBetween } from '@/common/leetCode/reverseList.js'
import HighLight from '@/components/lis/HighLight'
export default {
  name: 'reverseList',
  components: {
    HighLight
  },
  data () {
    return {
      msg: '',
      msgR: ''
    }
  },
  created () {
    let l1 = new ListNode(1)
    let dummy1 = l1
    dummy1.next = new ListNode(2); dummy1 = dummy1.next
    dummy1.next = new ListNode(3); dummy1 = dummy1.next
    dummy1.next = new ListNode(4); dummy1 = dummy1.next
    dummy1.next = new ListNode(5); dummy1 = dummy1.next
    console.log(l1)

    let result = reverseList(l1)
    console.log(result)

    let l2 = new ListNode(1)
    let dummy2 = l2
    dummy2.next = new ListNode(2); dummy2 = dummy2.next
    dummy2.next = new ListNode(3); dummy2 = dummy2.next
    dummy2.next = new ListNode(4); dummy2 = dummy2.next
    dummy2.next = new ListNode(5); dummy2 = dummy2.next
    console.log(l2)

    let result1 = reverseBetween(l2, 2, 4)
    console.log(result1)

    this.msg = `
      /**
       * 反转链表
       * @param {*} head
       *
       * 输入 1 -> 2 -> 3 -> 4 -> 5 -> null
       * 输出 5 -> 4 -> 3 -> 2 -> 1 -> null
       */

      export const reverseList = function (head) {
        let prev = null
        let curr = head
        // 基础
        // let next = head
        // while (curr != null) {
        //   next = curr.next
        //   curr.next = prev
        //   prev = curr
        //   curr = next
        // }

        // 优化 - 利用解构赋值
        while (curr != null) {
          [curr.next, prev, curr] = [prev, curr, curr.next]
        }
        return prev
      }
    `

    this.msgR = `
      /**
       * 反转链表
       * @param {*} head
       * @param {*} m = 2 开始位置
       * @param {*} n = 4 结束位置
       *
       * 输入 1 -> 2 -> 3 -> 4 -> 5 -> null
       * 输出 1 -> 4 -> 3 -> 2 -> 5 -> null
       */

      export const reverseBetween = function (head, m, n) {
        let prev = null
        let curr = head
        let next = head
        // 移动到m开始位置
        for (let i = 1; i < m; i++) { // 移动到m开始位置
          prev = curr
          curr = curr.next
        }
        // 占位
        // debugger
        let prev2 = prev
        let curr2 = curr
        // 反转
        for (let i = m; i <= n; i++) {
          next = curr.next
          curr.next = prev
          prev = curr
          curr = next
        }
        // 优化 - 利用解构赋值
        // for (let i = m; i <= n; i++) {
        //   [curr.next, prev, curr] = [prev, curr, curr.next]
        // }
        // 拼接
        if (prev2 != null) {
          prev2.next = prev
        } else {
          head = prev
        }
        curr2.next = curr
        return head
      }
    `
  }
}
</script>

<style lang='scss' scoped>
</style>
