<template>
  <div>
    <caption-data :aqi="23"
                  :co="98" />
    <humidity-data />
  </div>
</template>

<script>
import CaptionData from './caption/index'
import HumidityData from './humidity/index'
export default {
  name: 'Index',
  components: {
    CaptionData,
    HumidityData
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
</style>
