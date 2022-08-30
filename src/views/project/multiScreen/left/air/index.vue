<template>
  <div class="air-statistics">
    <div class="avg">
      <circle-collect class="circle"
                      :id="1"
                      :width="42"
                      :radius="6"
                      :progress="57.83"
                      barColor="#61A28B"
                      backgroundColor="#152528"
                      :title="'AQI'"
                      :value="57.83" />
      <circle-collect class="circle"
                      :id="2"
                      :width="42"
                      :radius="6"
                      :progress="88.84"
                      barColor="#2F7DB6"
                      backgroundColor="#152528"
                      :title="'No2'"
                      :value="88.84" />
    </div>
    <div class="column">
      <column-collect />
    </div>
  </div>
</template>

<script>
import CircleCollect from '@/components/module/CircleCollect'
import ColumnCollect from './ColumnCollect'
export default {
  name: 'Index',
  components: {
    CircleCollect,
    ColumnCollect
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.air-statistics {
  display: flex;
  flex-direction: column;
  height: calc(100% - 34px);
  .avg {
    flex: 1;
    display: flex;
    .circle {
      flex: 1;
    }
  }
  .column {
    flex: 2;
  }
}
</style>
