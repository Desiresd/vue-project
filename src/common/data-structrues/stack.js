
/**
 * 数据结构 - 栈
 * 遵循后进先出原则 LIFO
 * @class Stack
 */

class StackArr { // 以数组为基础
  // 初始化栈
  constructor () {
    this.items = []
  }
  // 向栈中添加元素
  push (element) {
    this.items.push(element)
  }
  // 从栈中移除元素
  pop () {
    return this.items.pop()
  }
  // 查看栈顶元素
  peek () {
    return this.items[this.items.length - 1]
  }
  // 检查栈你是否为空
  isEmpty () {
    return this.items.length === 0
  }
  // 查看栈的大小
  size () {
    return this.items.length
  }
  // 清空栈
  clear () {
    this.items = []
  }
  // 创建toString()方法
  toString () {
    return this.items.toString()
  }
}

class StackObj { // 以对象为基础
  // 初始化栈
  constructor () {
    this.count = 0
    this.items = {}
  }
  // 向栈中插入元素
  push (element) {
    this.items[this.count] = element
    this.count++
  }
  // 验证一个栈是否为空和它的大小
  size () {
    return this.count
  }
  isEmpty () {
    return this.count === 0
  }
  // 从栈中弹出元素
  pop () {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
  // 查看栈顶元素
  peek () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }
  // 清空栈元素
  clear () {
    this.items = {}
    this.count = 0
  }
  clear2 () {
    while (!this.isEmpty()) {
      this.pop()
    }
  }
  // 创建toString()方法
  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}

export { StackArr, StackObj }
