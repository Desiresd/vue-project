
/**
 *
 *
 * @class Promise
 */
// 声明三个状态 PENDING、FULFILLED、REJECTED
const PENDING = 'PENGING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

export default class Promise {
  constructor (executor) {
    // 默认状态值为PENDING
    this.status = PENDING
    // 存放成功的值，默认值为undefined
    this.value = undefined
    // 存放失败的原因，默认值为undefined
    this.reason = undefined

    // 调用resolve此方法表示成功
    let resolve = (value) => {
      // 状态为PENDING时才可以更新状态，防止executor中调用两次resolve方法
      this.status = FULFILLED
      this.value = value
    }

    // 调用reject此方法表示失败
    let reject = (reason) => {
      // 状态为PENDING时才可以更新状态，防止executor中调用两次reject方法
      this.status = REJECTED
      this.reason = reason
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  // 包含一个then方法，并接收两个参数onFulfilled、onRejected
  then (onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }
    if (this.status === REJECTED) {
      onRejected(this.reason)
    }
  }
}
