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
  // let next = head
  // 基础
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

/**
 * 反转链表
 * @param {*} head
 * @param {*} m 开始位置
 * @param {*} n 结束位置
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
