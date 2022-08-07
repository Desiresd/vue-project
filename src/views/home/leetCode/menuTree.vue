<template>
  <el-submenu v-if="item.children && item.children.length >= 1"
              :index="item.id">
    <template slot="title">
      <i :class="item.icon"></i>
      <span>{{ item.title }}</span>
    </template>
    <menu-tree v-for="item in item.children"
               :key="item.id"
               :item="item"
               @popDetails="popDetails"></menu-tree>
  </el-submenu>
  <el-menu-item v-else
                :index="item.id"
                @click="popDetails(item.details)">
    <template slot="title">
      <span>{{ item.title }}</span>
    </template>
  </el-menu-item>
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
  },
  methods: {
    popDetails (details) {
      this.$emit('popDetails', details)
    }
  }
}
</script>

<style lang='scss' scoped>
.el-menu-item.is-active {
  background: #e3f1ff;
}
</style>
