<template>
  <div class="back-drop">
    <div class="des">
      <div class="list">
        <i :class="icon"></i>
        <span>{{ titleCN }}</span>
        <span>{{ titleEN }}</span>
      </div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackDrop',
  props: {
    icon: {
      type: String,
      default: () => { return 'el-icon-edit' }
    },
    titleCN: {
      type: String,
      default: () => { return '' }
    },
    titleEN: {
      type: String,
      default: () => { return '' }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
$color-back: #1c1c28;
$color-text: #d9d7e1;
$color-cicle: #4486f0;
.back-drop {
  width: 100vw;
  height: 100vh;
  background: $color-back;
  color: $color-text;
  display: flex;
  .des {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    .list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      i {
        font-size: 60px;
        color: $color-cicle;
      }
      span {
        margin-top: 40px;
        letter-spacing: 2px;
      }
    }
  }
  .content {
    position: relative;
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      padding-bottom: 50%;
      border-radius: 50%;
      background: $color-cicle;
      z-index: 1;
    }
    & > * {
      z-index: 9;
    }
  }
}
</style>
