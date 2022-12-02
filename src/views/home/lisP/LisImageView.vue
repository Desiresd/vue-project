<template>
  <div>
    <a-button type="primary"
              @click="open">打开模态框</a-button>
    <lis-image-view ref="LisImageView"></lis-image-view>
  </div>
</template>

<script>

import LisImageView from '@/components/lisP/LisImageView'
export default {
  name: 'LisImageViews',
  components: {
    LisImageView
  },
  data () {
    return {

    }
  },
  mounted () {
    this.open()
  },
  methods: {
    open () {
      this.$refs.LisImageView.show()
    }
  }
}
</script>

<style scoped>
</style>
