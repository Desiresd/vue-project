<template>
  <div>
    <div class="hub">
      <name-title slotType="select"
                  img="titleBack.png">
        <template v-slot:select>
          <lis-dict v-model="lccontryName"
                    type="select"
                    dictCode="lccontry" />
        </template>
      </name-title>
    </div>
    <div class="air">
      <name-title slotType="name"
                  img="nameBack.png">
        <template v-slot:name>
          空气站
        </template>
      </name-title>
      <air-statistics />
    </div>
    <div class="water">
      <name-title slotType="name"
                  img="nameBack.png">
        <template v-slot:name>
          水站
        </template>
      </name-title>
      <water-statistics />
    </div>
    <div class="vocs">
      <name-title slotType="name"
                  img="nameBack.png">
        <template v-slot:name>
          VOCs
        </template>
      </name-title>
      <vocs-statistics />
    </div>
  </div>
</template>

<script>
import LisDict from '@/components/lisP/LisDict'
import NameTitle from './../NameTitle'
import AirStatistics from './air/index'
import waterStatistics from './water/index'
import vocsStatistics from './vocs/index'
export default {
  name: 'Index',
  components: {
    LisDict,
    NameTitle,
    AirStatistics,
    waterStatistics,
    vocsStatistics
  },
  data () {
    return {
      lccontryName: '东昌府区'
    }
  }
}
</script>

<style lang="scss" scoped>
.hub {
  flex: 2;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
}

.water {
  flex: 3;
}

.air,
.vocs {
  flex: 4;
}
</style>
