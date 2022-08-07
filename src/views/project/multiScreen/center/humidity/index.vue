<template>
  <div class="humidity">
    <title-cabinet title="烟气湿度数据" />
    <table-cabinet />
  </div>
</template>

<script>
import TitleCabinet from './TitleCabinet'
import TableCabinet from './TableCabinet'
export default {
  name: 'Index',
  components: {
    TitleCabinet,
    TableCabinet
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.humidity {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
