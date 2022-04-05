/**
 * 数据结构 - 队列
 * 遵循先进先出原则 FIFO
 * @class Queue
 */
class Queue {
  // 初始化队列
  constructor () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
  // 向队列添加元素
  enQueue (element) {
    this.items[this.count] = element
    this.count++
  }
  // 从队列移除元素
  deQueue () {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }
  // 查看队列头元素
  peek () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }
  // 获取队列长度
  size () {
    return this.count - this.lowestCount
  }
  // 检查队列是否为空
  isEmpty () {
    // return this.count - this.lowestCount === 0
    return this.size() === 0
  }
  // 清空队列
  clear () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
  // 创建toString()方法
  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let objString = this.items[this.lowestCount]
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}

export { Queue }
