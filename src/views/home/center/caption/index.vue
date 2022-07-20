<template>
  <div class="caption">
    <a-row>
      <a-col :span="12">
        <span>AQI</span>
        <span>
          <countTo :startVal="0"
                   :endVal="aqi"
                   :duration="1500">
          </countTo>
        </span>
      </a-col>
      <a-col :span="12">
        <span>CO</span>
        <span>
          <countTo :startVal="0"
                   :endVal="co"
                   :duration="1500">
          </countto>
        </span>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import countTo from 'vue-count-to'
export default {
  name: 'Index',
  components: {
    countTo
  },
  props: {
    aqi: {
      type: [String, Number],
      default: () => { return 0 }
    },
    co: {
      type: [String, Number],
      default: () => { return 0 }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.caption {
  display: flex;
  justify-content: center;
  .ant-row {
    position: relative;
    box-sizing: border-box;
    padding: 10px 0;
    width: 60%;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        244deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 50%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    &.ant-row::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        244deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 50%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
  .ant-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    span:first-child {
      color: #2f9edf;
      font-size: 20px;
    }
    span:last-child {
      font-size: 30px;
      color: #ffffff;
    }
  }
}
</style>
