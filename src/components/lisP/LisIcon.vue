<template>
  <a-icon :type="type"
          :theme="theme"
          :spin="spin"
          :rotate="rotate" />
</template>

<script>
export default {
  name: 'LisIcon',
  props: {
    type: { type: String, default: () => '' },
    theme: { type: String, default: () => 'outlined' }, // filled-实心 outlined-描线 twoTone-双色
    spin: { type: Boolean, default: () => false },
    rotate: { type: Number, default: () => 0 }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
</style>
