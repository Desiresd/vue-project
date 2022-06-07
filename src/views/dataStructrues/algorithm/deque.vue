<template>
  <div>
    <h3>{{ name }}</h3>
    <div class="btn-group">
      <el-button type="success"
                 size="small"
                 @click="addFront">队列前端添加一个元素</el-button>
      <el-button type="success"
                 size="small"
                 @click="addBack">队列后端添加一个元素</el-button>
      <el-button type="danger"
                 size="small"
                 @click="removeFront">队列前端移除第一个元素</el-button>
      <el-button type="danger"
                 size="small"
                 @click="removeBack">队列后端移除第一个元素</el-button>
      <el-button type="primary"
                 size="small"
                 @click="peekFront"> 查看队列前端的第一个元素</el-button>
      <el-button type="primary"
                 size="small"
                 @click="peekBack">查看队列后端的第一个元素</el-button>
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
      {{ dequeString }}
    </p>
    <dialog-add ref="dialogAdd"
                :title="'向队列中添加元素'"
                @getForm="getForm" />
  </div>
</template>

<script>
import DialogAdd from './dialogAdd.vue'
import { Deque } from '@/common/data-structrues/deque.js'
export default {
  name: 'deque',
  components: {
    DialogAdd
  },
  data () {
    return {
      name: '双端队列',
      deque: {},
      dequeType: ''
    }
  },
  created () {
    this.deque = new Deque()
  },
  computed: {
    dequeString () {
      return this.deque.toString()
    }
  },
  methods: {
    getForm (data) {
      switch (this.dequeType) {
        case 'front':
          this.deque.addFront(data.content)
          break
        case 'back':
          this.deque.addBack(data.content)
          break
        default:
          break
      }
    },
    addFront () {
      this.$refs.dialogAdd.visible = true
      this.dequeType = 'front'
    },
    addBack () {
      this.$refs.dialogAdd.visible = true
      this.dequeType = 'back'
    },
    removeFront () {
      const result = this.deque.removeFront()
      this.$message({
        showClose: true,
        message: `队列前端移除元素：${result}`,
        type: 'success'
      })
    },
    removeBack () {
      const result = this.deque.removeBack()
      this.$message({
        showClose: true,
        message: `队列后端移除元素：${result}`,
        type: 'success'
      })
    },
    peekFront () {
      this.$message({
        showClose: true,
        message: `队列前端的第一个元素是：${this.deque.peekFront()}`,
        type: 'success'
      })
    },
    peekBack () {
      this.$message({
        showClose: true,
        message: `队列后端的第一个元素是：${this.deque.peekBack()}`,
        type: 'success'
      })
    },
    isEmpty () {
      this.$message({
        showClose: true,
        message: `队列是否为空：${this.deque.isEmpty() ? '是' : '否'}`,
        type: 'success'
      })
    },
    size () {
      this.$message({
        showClose: true,
        message: `队列的大小为：${this.deque.size()}`,
        type: 'success'
      })
    },
    clear () {
      this.deque.clear()
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
