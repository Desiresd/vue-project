<template>
  <div>
    <h3>{{ name }}</h3>
    <div class="btn-group">
      <el-button type="success"
                 size="small"
                 @click="enQueue">向队列中添加元素</el-button>
      <el-button type="danger"
                 size="small"
                 @click="deQueue">从队列中移除元素</el-button>
      <el-button type="primary"
                 size="small"
                 @click="peek">查看队列顶元素</el-button>
      <el-button type="info"
                 size="small"
                 @click="isEmpty">检查队列是否为空</el-button>
      <el-button type="warning"
                 size="small"
                 @click="size">查看队列的大小</el-button>
      <el-button type="warning"
                 size="small"
                 @click="clear">清空队列</el-button>
    </div>
    <p>
      {{ queueString }}
    </p>
    <dialog-add ref="dialogAdd"
                :title="'向队列中添加元素'"
                @getForm="getForm" />
  </div>
</template>

<script>
import DialogAdd from './dialogAdd.vue'
import { Queue } from '@/common/data-structrues/queue.js'
export default {
  name: 'queue',
  components: {
    DialogAdd
  },
  data () {
    return {
      name: '队列 - 先进先出 - FIFO',
      queue: {}
    }
  },
  created () {
    this.queue = new Queue()
  },
  computed: {
    queueString () {
      return this.queue.toString()
    }
  },
  methods: {
    getForm (data) {
      this.queue.enQueue(data.content)
    },
    enQueue () {
      this.$refs.dialogAdd.visible = true
    },
    deQueue () {
      const result = this.queue.deQueue()
      this.$message({
        showClose: true,
        message: `队列中移除元素：${result}`,
        type: 'success'
      })
    },
    peek () {
      this.$message({
        showClose: true,
        message: `队列头元素是：${this.queue.peek()}`,
        type: 'success'
      })
    },
    isEmpty () {
      this.$message({
        showClose: true,
        message: `队列是否为空：${this.queue.isEmpty() ? '是' : '否'}`,
        type: 'success'
      })
    },
    size () {
      this.$message({
        showClose: true,
        message: `队列的大小为：${this.queue.size()}`,
        type: 'success'
      })
    },
    clear () {
      this.queue.clear()
      this.$message({
        showClose: true,
        message: `清空队列`,
        type: 'success'
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.btn-group {
  display: flex;
  flex-flow: wrap;
  justify-content: left;
  & button {
    margin-bottom: 10px;
  }
}
</style>
