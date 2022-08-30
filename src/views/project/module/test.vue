<template>
  <div>
    <circle-collect class="circle"
                    :id="1"
                    :width="42"
                    :radius="6"
                    :progress="57.83"
                    barColor="#61A28B"
                    backgroundColor="#152528"
                    :title="'AQI'"
                    :value="57.83" />
  </div>
</template>

<script>
import CircleCollect from '@/components/module/CircleCollect'
export default {
  name: 'test',
  components: {
    CircleCollect
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
</style>
