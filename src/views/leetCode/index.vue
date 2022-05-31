<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside :openedMenus="[]"
              width="300px"
              style="background-color: rgb(238, 241, 246)">
      <el-menu :default-active="'1-1'"
               :unique-opened="true">
        <menu-tree v-for="item in sideData"
                   :key="item.id"
                   :item="item"
                   @popDetails="popDetails"></menu-tree>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <span style="font-size: 20px;font-weight: bold;">习题汇总（学习）</span>
      </el-header>
      <el-main>
        <container-view :details="details" />
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import { leetContent } from '@/json/leetContent.js'
import menuTree from './menuTree.vue'
import containerView from './containerView.vue'
export default {
  name: 'index',
  components: {
    menuTree,
    containerView
  },
  data () {
    return {
      sideData: leetContent,
      details: []
    }
  },
  created () {
    this.details = leetContent[0].children[0].details
  },
  methods: {
    popDetails (details) {
      this.details = details
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
