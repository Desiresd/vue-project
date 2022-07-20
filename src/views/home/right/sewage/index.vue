<template>
  <div class="sewage-data">
    <pie-collect></pie-collect>
  </div>
</template>

<script>
import PieCollect from './PieCollect'
export default {
  name: 'Index',
  components: {
    PieCollect
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.sewage-data {
  width: 100%;
  height: calc(100% - 28px);
}
</style>
