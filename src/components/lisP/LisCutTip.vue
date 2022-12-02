<template>
  <div class="cut-tip"
       v-show="tipShow">
    {{ tipMsg }}
  </div>
</template>

<script>
export default {
  name: 'LisCutTip',
  data () {
    return {
      tipShow: false,
      tipMsg: ''
    }
  },
  methods: {
    tiping (tip) {
      this.tipMsg = tip
      this.tipShow = true
      setTimeout(() => {
        this.tipShow = false
      }, 1200)
    }
  }
}
</script>

<style scoped>
.cut-tip {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 5px 10px;
  background: rgba(000, 000, 000, 0.5);
  border-radius: 4px;
  color: #ffffff;
  letter-spacing: 1px;
  user-select: none;
  z-index: 99;
}
</style>
