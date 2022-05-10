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
    curr.next = new ListNode(sum % 10)
    carry = Math.floor(sum / 10)
    curr = curr.next
  }

  if (carry > 0) {
    curr.next = new ListNode(carry)
  }
  return dummy.next
}
