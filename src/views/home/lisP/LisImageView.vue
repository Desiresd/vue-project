<template>
  <div>
    <a-button type="primary"
              @click="open">打开模态框</a-button>
    <lis-image-view ref="LisImageView"
                    :imgIndex="imageIndex"
                    :imgSrc="imgSrc"
                    :imgArr="imgArr" />
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
      imageIndex: 0,
      imgSrc: 'seal.png',
      imgArr: ['seal.png', 'aurora.jpg', 'aboutme.jpg']
    }
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
