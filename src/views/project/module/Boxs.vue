<template>
  <div class="box">
    <div class="image">
      <el-image :src="require('@/assets/module/'+ item.image)"
                :style="{ width: '80px'}" />
    </div>
    <div class="text">
      <span class="bold">{{ item.name }}</span>
      <span>{{ item.des }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navs',
  props: {
    item: {
      type: Object,
      default: () => { return {} }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
$color-back: #ffffff;
$color-hover: #f5f5f5;
.box {
  width: 300px;
  height: 100px;
  display: flex;
  background: $color-back;
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box;
  padding: 3px;
  user-select: none;
  .image {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
    .bold {
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 5px;
    }
    span {
      letter-spacing: 1px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
