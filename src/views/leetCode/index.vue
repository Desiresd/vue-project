<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="300px"
              style="background-color: rgb(238, 241, 246)">
      <el-menu>
        <router-link v-for="(item,index) in sideData"
                     :key="index"
                     :to="item.route">
          <el-menu-item :index="(index+1).toString()">
            {{ item.name }}
            {{ item.diff === '3'?'(困难)':item.diff === '2'?'(中等)':'(简单)' }}
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <span style="font-size: 20px;font-weight: bold;">LeetCode题目汇总</span>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { leetSide } from '@/json/leetSide.js'
export default {
  name: 'index',
  data () {
    return {
      sideData: leetSide
    }
  }
}

</script>

<style lang='scss' scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el-menu-item {
  position: relative;
  font-size: 16px;
}

.el-menu-item::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #f5f5f5;
}

.el-main {
  font-size: 16px;
}
</style>
