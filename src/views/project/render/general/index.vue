<template>
  <div class="content">
    <div>
      <p>JS运行时间</p>
      <p>总渲染时间</p>
    </div>
    <ul class="list">
      <li v-for="(item,index) in elList"
          :key="index">
        {{ item }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      timeNow: '',
      timeEnd: '',
      total: 10000,
      elList: []
    }
  },
  created () {
    this.addList()
  },
  methods: {
    addList () {
      this.timeNow = Date.now()
      for (let i = 0; i < this.total; i++) {
        this.elList.push(i + 1)
      }
      console.log(`JS执行时间 ${Date.now() - this.timeNow} ms`)
      this.$nextTick(() => {
        console.log(`渲染时间 ${Date.now() - this.timeNow} ms`)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.content {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .list {
    width: 400px;
    height: 600px;
    border: 1px solid #000;
    overflow-y: scroll;
  }
}
</style>
