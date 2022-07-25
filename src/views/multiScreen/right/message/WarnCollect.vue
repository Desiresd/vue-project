<template>
  <div class="warn-collect">
    <div class="img">
      <img :src="require('@/assets/home/warn.png')"
           alt="warn"
           width="15"
           height="15">
    </div>
    <div class="list">
      <span>报警原因：{{ item.reason }}</span>
      <span>位置:{{ item.location }} &nbsp; 人员:{{ item.person }} &nbsp; 时间:{{ item.time }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WarnCollect',
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          reason: '',
          location: '',
          person: '',
          time: ''
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
.warn-collect {
  display: flex;
  box-sizing: border-box;
  padding: 12px 15px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: linear-gradient(
      to right,
      rgba(174, 174, 174, 0.3),
      rgba(174, 174, 174, 0)
    );
  }
  .list {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    letter-spacing: 0.5px;
    span {
      width: 300px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      &:first-child {
        font-size: 15px;
        color: #2f9edf;
      }
      &:last-child {
        font-size: 12px;
        margin-top: 4px;
      }
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -14px;
      width: 100%;
      height: 1px;
      background: linear-gradient(
        244deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
      );
      background-origin: padding-box;
    }
  }
}
</style>
