<template>
  <div class="coord">
    <span>经度：{{ fixedTwo(latlng.lng) || null }}</span>
    <span>纬度：{{ fixedTwo(latlng.lat) || null }}</span>
  </div>
</template>

<script>
export default {
  name: 'Coord',
  props: {
    latlng: {
      type: Object,
      default: () => { return {} }
    }
  },
  computed: {
    fixedTwo () {
      return function (num) {
        return Math.floor(num * 100) / 100
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.coord {
  width: 200px;
  display: flex;
  box-sizing: border-box;
  padding: 3px 10px;
  background: #ffffff;
  color: black;
  font-size: 13px;
  z-index: 999;
  span {
    flex: 1;
  }
}
</style>
