<template>
  <div class="stick-note"
       :style="{color: '#000'}">
    <el-image class="image"
              :src="require('@/assets/note/'+'note-gc.jpg')"
              :style="{width: '230px',height: '380px'}"></el-image>
    <div class="content">
      <span v-for="(ite,inde) in note"
            :key="inde">
        {{ ite }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StickyNote',
  props: {
    note: {
      type: Array,
      default: () => { return [] }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.stick-note {
  position: relative;
  width: 230px;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 45px;
  .image {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .content {
    z-index: 9;
    box-sizing: border-box;
    padding: 30px;
    writing-mode: vertical-rl;
    span {
      display: block;
      position: inherit;
      letter-spacing: 5px;
      line-height: 30px;
      font-size: 16px;
      &:last-child {
        text-align: right;
      }
    }
  }
}
</style>
