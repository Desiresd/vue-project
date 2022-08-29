<template>
  <el-submenu v-if="item.children && item.children.length >= 1"
              :index="item.id">
    <template slot="title">
      <i :class="item.icon"></i>
      <span>{{ item.title }}</span>
    </template>
    <menu-tree v-for="item in item.children"
               :key="item.id"
               :item="item"></menu-tree>
  </el-submenu>
  <router-link v-else
               :to="item.router">
    <el-menu-item :index="item.id">
      <template slot="title">
        <span>{{ item.title }}</span>
      </template>
    </el-menu-item>
  </router-link>
</template>

<script>
export default {
  name: 'menuTree',
  props: {
    item: Object
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.el-menu-item.is-active {
  background: #e3f1ff;
}
</style>
