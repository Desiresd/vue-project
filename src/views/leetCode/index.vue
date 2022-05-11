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
import { twoSum } from '@/common/leetCode/twoSum.js'
// import twoSum from './twoSum.vue'
export default {
  name: 'index',
  components: {
    twoSum
  },
  data () {
    const sideData = [
      {
        name: '两数相加求目标值',
        route: '/leetCode/twoSum'
      },
      {
        name: '两个数组的交集',
        route: '/leetCode/interSection'
      },
      {
        name: '两数相加（链表）',
        route: '/leetCode/addTwoNumbers'
      },
      {
        name: '两两交换链表中的节点（链表）',
        route: '/leetCode/swapPairs'
      },
      {
        name: '反转链表（链表）',
        route: '/leetCode/reverseList'
      },
      {
        name: '旋转字符串',
        route: '/leetCode/rotateString'
      },
      {
        name: '重复的DNA序列',
        route: '/leetCode/findRepeatedDnaSequences'
      }
    ]
    return {
      sideData: sideData
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
