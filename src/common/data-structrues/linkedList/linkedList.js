import { defaultEquals } from './defaultEquals'
import { Node } from './node'

/**
 * 数据结构 - 链表
 *
 * @class LinkedList
 */
class LinkedList {
  // 初始化链表
  constructor (equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }
  // 向链表尾部添加一个新元素
  push (element) {
    const node = new Node(element)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      while (current.next != null) { // 获取最后一项
        current = current.next
      }
      // 将其next赋为新元素，建立链接
      current.next = node
    }
    this.count++
  }
  // 向链表的特定位置插入一个新元素
  insert (element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        node.next = current
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }
  // 返回链表中特定位置的元素。如果链表不存在这样的元素，则返回undefined
  getElementAt (index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head
      for (let i = 0; i < index && current != null; i++) {
        current = current.next
      }
      return current
    }
    return undefined
  }
  // 从链表中移除一个元素
  remove (element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }
  // 返回元素在链表中的索引。如果链表中没有该元素则返回-1
  indexOf (element) {
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }
  // 从链表的特定位置移除一个元素
  removeAt (index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      // 移除第一项
      if (index === 0) {
        this.head = current.next
      } else {
        let previous
        for (let i = 0; i < index; i++) {
          previous = current
          current = current.next
        }
        // 将previous与current的下一项链接起来，跳过current，从而移除它
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
    // 优化版本
    // if (index >= 0 && index < this.count) {
    //   let current = this.head
    //   if (index === 0) {
    //     this.head = current.next
    //   }
    //   const previous = this.getElementAt(index - 1)
    //   current = previous.next
    //   previous.next = current.next
    //   this.count--
    // }
    // return undefined
  }
  // 返回链表头部元素
  getHead () {
    return this.head
  }
  // 如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false
  isEmpty () {
    return this.size() === 0
  }
  // 返回链表包含的元素个数，与数组的length属性类似
  size () {
    return this.count
  }
  // 清空链表
  clear () {
    this.count = 0
    this.head = undefined
  }
  // 返回原始整个链表的字符串，由于列表项使用了Node类，就需要重写一个继承自javaScript对象默认的toString()方法，让其只输出元素的值
  toString () {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString
  }
}

export { LinkedList }
