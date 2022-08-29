<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside :openedMenus="[]"
              width="300px"
              style="background-color: rgb(238, 241, 246)">
      <div class="side-title">
        <span>MO制作</span>
      </div>
      <el-menu :default-active="'1-1'"
               :unique-opened="true">
        <menu-tree v-for="item in sideData"
                   :key="item.id"
                   :item="item"></menu-tree>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <span style="font-size: 20px;font-weight: bold;">Canvas（学习）</span>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import menuTree from './menuTree.vue'
export default {
  name: 'index',
  components: {
    menuTree
  },
  data () {
    return {
      sideData: [
        {
          id: '1',
          icon: 'el-icon-s-help',
          title: '基础',
          children: [
            {
              id: '1-1',
              title: '表格',
              router: 'table'
            }
          ]
        },
        {
          id: '2',
          icon: 'el-icon-more',
          title: '图形',
          children: [
            {
              id: '2-1',
              title: '圆形',
              router: ''
            }
          ]
        }
      ]
    }
  }
}

</script>

<style lang='scss' scoped>
.side-title {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 20px;
    font-weight: bold;
  }
}
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
