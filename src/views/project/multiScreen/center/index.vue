<template>
  <div>
    <caption-data :aqi="23"
                  :co="98" />
    <atlas-data :cityValue="cityValue"
                @setCity="setCity" />
    <humidity-data />
  </div>
</template>

<script>
import CaptionData from './caption/index'
import HumidityData from './humidity/index'
import AtlasData from './atlas/index'
export default {
  name: 'Index',
  components: {
    CaptionData,
    HumidityData,
    AtlasData
  },
  data () {
    return {
      cityValue: '450103'
    }
  },
  methods: {
    setCity (name) {
      console.log(name)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
