<template>
  <div class="water-statistics">
    <a-row>
      <a-col :span="12"
             v-for="(item,index) in waterData"
             :key="index">
        <sub-total :title="item.title"
                   :name="item.name"
                   :num="item.num"
                   :time="800" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import SubTotal from './SubTotal'
export default {
  name: 'Index',
  components: {
    SubTotal
  },
  data () {
    return {
      waterData: [
        {
          title: '趋势站',
          name: 'xxx水站',
          num: 2
        },
        {
          title: '原有站',
          name: 'xxx水站',
          num: 5
        },
        {
          title: '新建站',
          name: 'xxx水站',
          num: 6
        },
        {
          title: '改造原有站',
          name: 'xxx水站',
          num: 8
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.water-statistics {
  width: 100%;
  height: calc(100% - 34px);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0 0 10%;
}
</style>
