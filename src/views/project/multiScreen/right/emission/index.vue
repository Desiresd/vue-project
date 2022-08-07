<template>
  <div class="emission-data">
    <div class="radar">
      <radar-collect></radar-collect>
    </div>
    <div class="fix">
      <fix-collect v-for="(item,index) in fixData"
                   :key="index"
                   :item="item"></fix-collect>
    </div>
  </div>
</template>

<script>
import RadarCollect from './RadarCollect'
import FixCollect from './FixCollect'
export default {
  name: 'Index',
  components: {
    RadarCollect,
    FixCollect
  },
  data () {
    return {
      fixData: [
        {
          name: '二氧化硫有效小时个数',
          grade: 'A'
        },
        {
          name: 'PH-val',
          grade: 'B'
        },
        {
          name: '氨氮val',
          grade: 'C'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.emission-data {
  width: 100%;
  height: calc(100% - 28px);
  display: flex;
  .radar {
    flex: 2;
  }
  .fix {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;
    .fix-collect {
      flex: 1;
      &:not(:first-child) {
        margin-top: 10px;
      }
    }
  }
}
</style>
