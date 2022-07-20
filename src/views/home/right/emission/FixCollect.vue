<template>
  <div class="fix-collect">
    <span>{{ item.name }}</span>
    <span>{{ item.grade }}</span>
    <boundary class="left-top" />
    <boundary class="left-bottom" />
    <boundary class="right-top" />
    <boundary class="right-bottom" />
  </div>
</template>

<script>
import Boundary from './Boundary'
export default {
  name: 'FixCollect',
  components: {
    Boundary
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          name: 'name',
          grade: 'grade'
        }
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
.fix-collect {
  position: relative;
  box-sizing: border-box;
  padding: 0 20px;
  span {
    display: block;
    font-size: 14px;
    text-align: center;
    &:nth-child(1) {
      color: #2f9edf;
    }
    &:nth-child(2) {
      font-size: 20px;
    }
  }
  .left-top {
    position: absolute;
    left: 0;
    top: 0;
  }

  .left-bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    transform: rotate(270deg);
  }

  .right-top {
    position: absolute;
    right: 0;
    top: 0;
    transform: rotate(90deg);
  }

  .right-bottom {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: rotate(180deg);
  }
}
</style>
