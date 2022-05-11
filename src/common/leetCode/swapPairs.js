/**
 * 两两交换链表中的节点
 * @param {*} head
 *
 * 输入 1 -> 2 -> 3 -> 4
 * 输出 2 -> 1 -> 4 -> 3
 */
import { ListNode } from './ListNode'
export const swapPairs = function (head) {
  let dummy = new ListNode()
  dummy.next = head
  let current = dummy
  while (current.next != null && current.next.next != null) {
    let n1 = current.next
    let n2 = current.next.next
    current.next = n2
    n1.next = n2.next
    n2.next = n1
    current = n1
  }
  return dummy.next
}
