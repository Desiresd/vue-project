<template>
  <div>
    <h3>{{ nameArr }}</h3>
    <div>
      <el-button type="success"
                 size="small"
                 @click="pushArr">向栈中添加元素</el-button>
      <el-button type="danger"
                 size="small"
                 @click="popArr">从栈中移除元素</el-button>
      <el-button type="primary"
                 size="small"
                 @click="peekArr">查看栈顶元素</el-button>
      <el-button type="info"
                 size="small"
                 @click="isEmptyArr">检查栈是否为空</el-button>
      <el-button type="warning"
                 size="small"
                 @click="sizeArr">查看栈的大小</el-button>
      <el-button type="warning"
                 size="small"
                 @click="clearArr">清空栈</el-button>
      <div>
        <br />
        {{ dataArrString }}
      </div>
    </div>
    <h3>{{ nameObj }}</h3>
    <el-button type="success"
               size="small"
               @click="pushObj">向栈中添加元素</el-button>
    <el-button type="danger"
               size="small"
               @click="popObj">从栈中移除元素</el-button>
    <el-button type="primary"
               size="small"
               @click="peekObj">查看栈顶元素</el-button>
    <el-button type="info"
               size="small"
               @click="isEmptyObj">检查栈是否为空</el-button>
    <el-button type="warning"
               size="small"
               @click="sizeObj">查看栈的大小</el-button>
    <el-button type="warning"
               size="small"
               @click="clearObj">清空栈</el-button>
    <div>
      <br />
      {{ dataObjString }}
    </div>
    <dialog-add ref="dialogAdd"
                :title="'向栈中添加元素'"
                @getForm="getForm" />
  </div>
</template>

<script>
import DialogAdd from './dialogAdd.vue'
import { StackArr, StackObj } from '@/common/data-structrues/stack.js'
export default {
  name: 'stack',
  components: {
    DialogAdd
  },
  data () {
    return {
      stackType: '', // arr obj
      nameArr: '栈 - 数组 - 后进先出 - LIFO',
      nameObj: '栈 - 对象 - 后进先出 - LIFO',
      dataArr: [],
      dataObj: {}
    }
  },
  created () {
    this.dataArr = new StackArr()
    this.dataObj = new StackObj()
  },
  computed: {
    dataArrString () {
      return this.dataArr.toString()
    },
    dataObjString () {
      return this.dataObj.toString()
    }
  },
  methods: {
    getForm (data) {
      switch (this.stackType) {
        case 'arr':
          this.dataArr.push(data.content)
          break
        case 'obj':
          this.dataObj.push(data.content)
          break
        default:
          break
      }
    },
    pushArr () {
      this.$refs.dialogAdd.visible = true
      this.stackType = 'arr'
    },
    pushObj () {
      this.$refs.dialogAdd.visible = true
      this.stackType = 'obj'
    },
    popArr () {
      this.$message({
        showClose: true,
        message: `栈中移除元素`,
        type: 'success'
      })
      this.dataArr.pop()
    },
    popObj () {
      this.$message({
        showClose: true,
        message: `栈中移除元素`,
        type: 'success'
      })
      this.dataObj.pop()
    },
    peekArr () {
      this.$message({
        showClose: true,
        message: `栈顶元素是：${this.dataArr.peek()}`,
        type: 'success'
      })
    },
    peekObj () {
      this.$message({
        showClose: true,
        message: `栈顶元素是：${this.dataObj.peek()}`,
        type: 'success'
      })
    },
    isEmptyArr () {
      this.$message({
        showClose: true,
        message: `栈是否为空：${this.dataArr.isEmpty() ? '是' : '否'}`,
        type: 'success'
      })
    },
    isEmptyObj () {
      this.$message({
        showClose: true,
        message: `栈是否为空：${this.dataObj.isEmpty() ? '是' : '否'}`,
        type: 'success'
      })
    },
    sizeArr () {
      this.$message({
        showClose: true,
        message: `栈的大小为：${this.dataArr.size()}`,
        type: 'success'
      })
    },
    sizeObj () {
      this.$message({
        showClose: true,
        message: `栈的大小为：${this.dataObj.size()}`,
        type: 'success'
      })
    },
    clearArr () {
      this.dataArr.clear()
      this.$message({
        showClose: true,
        message: `清空栈`,
        type: 'success'
      })
    },
    clearObj () {
      this.dataObj.clear()
      this.$message({
        showClose: true,
        message: `清空栈`,
        type: 'success'
      })
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
