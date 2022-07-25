<template>
  <div class="vocs-statistics">
    <select-title dictCode="lccontry" />
    <div class="pyramid-collect">
      <pyramid-collect />
    </div>
  </div>
</template>

<script>
import SelectTitle from './SelectTitle'
import PyramidCollect from './PyramidCollect'
export default {
  name: 'Index',
  components: {
    SelectTitle,
    PyramidCollect
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.vocs-statistics {
  height: calc(100% - 34px);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  .pyramid-collect {
    width: 100%;
    height: calc(100% - 24px);
  }
}
</style>
