<template>
  <div>
    <h3>这里是Provide</h3>
    <vue-inject />
  </div>
</template>

<script>
import VueInject from './inject'
export default {
  name: 'Provide',
  components: {
    VueInject
  },
  provide: {
    provideData: '我是provide传递过来的'
  },
  data() {
    return {
      arr: [1, 2, 3, 4]
    }
  }
}
</script>

<style lang='scss' scoped></style>
