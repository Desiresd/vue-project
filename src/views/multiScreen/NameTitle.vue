<template>
  <div class="home-title">
    <img :src="require(`@/assets/home/${img}`)"
         alt="title" />
    <div v-if="slotType === 'name'"
         class="name">
      <slot name='name'></slot>
    </div>
    <div v-else
         class="select">
      <slot name='select'></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slotType: {
      type: String,
      default: () => { return 'name' }
    },
    img: {
      type: String,
      default: () => { return 'titleBack.png' }
    }
  }
}
</script>

<style lang="scss" scoped>
.home-title {
  position: relative;
  width: 80%;
  height: 34px;
  margin-left: 10%;
  img {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 9;
  }
  .name {
    position: relative;
    font-size: 13px;
    box-sizing: border-box;
    padding-left: 16px;
    padding-top: 9px;
    z-index: 99;
  }
  .select {
    position: relative;
    box-sizing: border-box;
    padding-left: 14px;
    width: 45%;
    z-index: 99;
  }
}

/deep/ .ant-select-selection.ant-select-selection--single {
  height: 22px;
}
/deep/ .ant-select-selection__rendered {
  line-height: 22px;
}
</style>
