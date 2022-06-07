<template>
  <div>
    <h3>{{ name }}</h3>
    <div class="btn-group">
      <el-button type="success"
                 size="small"
                 @click="insert">向链表的特定位置插入一个新元素</el-button>
      <el-button type="danger"
                 size="small"
                 @click="removeAt">从链表的特定位置移除一个元素</el-button>
      <el-button type="primary"
                 size="small"
                 @click="indexof">返回元素在链表中的索引</el-button>
      <el-button type="info"
                 size="small"
                 @click="isEmpty">检查链表是否为空</el-button>
      <el-button type="warning"
                 size="small"
                 @click="size">查看链表的大小</el-button>
      <el-button type="warning"
                 size="small"
                 @click="clear">清空链表</el-button>
    </div>
    <p>
      {{ queueString }}
    </p>
    <dialog-add ref="dialogAdd"
                :title="title"
                :content="content"
                :location="location"
                @getForm="getForm" />
  </div>
</template>

<script>
import DialogAdd from './dialogAdd.vue'
import { LinkedList } from '@/common/data-structrues/linkedList/LinkedList.js'
export default {
  name: 'linkedList',
  components: {
    DialogAdd
  },
  data () {
    return {
      name: '链表',
      title: '',
      content: true,
      location: true,
      modalOrder: 0,
      linkedList: {}
    }
  },
  created () {
    this.linkedList = new LinkedList()
  },
  computed: {
    queueString () {
      return this.linkedList.toString()
    }
  },
  methods: {
    getForm (data) {
      switch (this.modalOrder) {
        case 1:
          this.linkedList.insert(data.content, data.location)
          break
        case 2:
          const result = this.linkedList.removeAt(data.location)
          this.$message({
            showClose: true,
            message: `链表中移除元素：${result}`,
            type: 'success'
          })
          break
        case 3:
          console.log(data)
          this.$message({
            showClose: true,
            message: `返回元素在链表中的索引：${this.linkedList.indexOf(data.content)}`,
            type: 'success'
          })
          break
        default:
          break
      }
    },
    insert () {
      this.title = '向链表的特定位置插入一个新元素'
      this.location = true
      this.content = true
      this.modalOrder = 1
      this.$refs.dialogAdd.visible = true
    },
    removeAt () {
      this.title = '从链表的特定位置移除一个元素'
      this.location = true
      this.content = false
      this.modalOrder = 2
      this.$refs.dialogAdd.visible = true
    },
    indexof () {
      this.title = '返回元素在链表中的索引'
      this.location = false
      this.content = true
      this.modalOrder = 3
      this.$refs.dialogAdd.visible = true
    },
    isEmpty () {
      this.$message({
        showClose: true,
        message: `链表是否为空：${this.linkedList.isEmpty() ? '是' : '否'}`,
        type: 'success'
      })
    },
    size () {
      this.$message({
        showClose: true,
        message: `链表的大小为：${this.linkedList.size()}`,
        type: 'success'
      })
    },
    clear () {
      this.linkedList.clear()
      this.$message({
        showClose: true,
        message: `清空链表`,
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
