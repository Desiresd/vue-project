<template>
  <div class="title-cabinet">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'TitleCabinet',
  props: {
    title: {
      type: String,
      default: () => { return '' }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.title-cabinet {
  width: 200px;
  height: 32px;
  background: url("~@/assets/home/btnBack.png") no-repeat;
  background-size: 200px 32px;
  text-align: center;
  line-height: 32px;
  font-size: 16px;
  letter-spacing: 1px;
}
</style>
