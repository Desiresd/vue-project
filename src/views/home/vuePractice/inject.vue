<template>
  <div>
    <h3>这里是Inject</h3>
    provide中的值：{{ provideData }}
  </div>
</template>

<script>
export default {
  name: 'Inject',
  inject: ['provideData'],
  data() {
    return {

    }
  }
}
</script>

<style lang='scss' scoped></style>
