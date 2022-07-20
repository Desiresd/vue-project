<template>
  <div class="sub-total">
    <div class="title-group">
      <span>{{ title }}</span>
      <span>{{ name }}</span>
    </div>
    <div class="num-total">
      <span>
        <countTo :startVal="0"
                 :endVal="num"
                 :duration="time"></countTo>
      </span>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to'
export default {
  name: 'SubTotal',
  components: {
    countTo
  },
  props: {
    title: {
      type: String,
      default: () => { '标题' }
    },
    name: {
      type: String,
      default: () => { return '名称' }
    },
    num: {
      type: [Number, String],
      default: () => { return 0 }
    },
    time: {
      type: Number,
      default: () => { return 10 }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.sub-total {
  display: flex;
  .title-group {
    flex: 2;
    span {
      display: block;
      letter-spacing: 1px;
      &:first-child {
        font-size: 16px;
      }
      &:last-child {
        color: #2e7bb3;
      }
    }
  }
  .num-total {
    flex: 1;
    span {
      font-size: 46px;
      color: #2e7bb3;
    }
  }
  .title-group,
  .num-total {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
