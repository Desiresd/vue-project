<template>
  <div class="data-structrues">
    <h2>数据结构</h2>
    <stack />
    <queue />
    <deque />
  </div>
</template>

<script>
import Stack from './algorithm/stack.vue'
import Queue from './algorithm/queue.vue'
import Deque from './algorithm/deque.vue'
export default {
  name: 'index',
  components: {
    Stack,
    Queue,
    Deque
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
