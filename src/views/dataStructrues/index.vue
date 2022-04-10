<template>
  <div class="data-structrues">
    <h2>数据结构</h2>
    <!-- 栈 - 数组/对象 - 后进先出 - LIFO -->
    <stack />
    <!-- 队列 - 先进先出 - FIFO -->
    <queue />
    <!-- 双端队列 -->
    <deque />
    <!-- 链表 -->
    <linked-list />
  </div>
</template>

<script>
import Stack from './algorithm/stack.vue'
import Queue from './algorithm/queue.vue'
import Deque from './algorithm/deque.vue'
import LinkedList from './algorithm/linkedList.vue'
export default {
  name: 'index',
  components: {
    Stack,
    Queue,
    Deque,
    LinkedList
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.data-structrues {
  box-sizing: border-box;
  padding: 20px;
}
</style>
