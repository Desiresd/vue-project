<template>
  <div class="tools">
    <div class="all"
         :class="name === item.alt ? 'actived':''"
         v-for="(item,index) in list"
         :key="index"
         @click="toDraw(item.alt)">
      <a-tooltip placement="right">
        <template slot="title">
          <span>{{ item.name }}</span>
        </template>
        <img width="20"
             height="20"
             :src="require('@/assets/map/'+ item.src)"
             :alt="item.alt" />
      </a-tooltip>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Tools',
  props: {
    name: {
      type: String,
      default: () => { return '' }
    }
  },
  data () {
    return {
      list: [
        {
          name: '标点',
          src: 'mark.png',
          alt: 'mark'
        },
        {
          name: '标线',
          src: 'wire.png',
          alt: 'wire'
        },
        {
          name: '标面',
          src: 'side.png',
          alt: 'side'
        },
        {
          name: '画圆',
          src: 'circle.png',
          alt: 'circle'
        },
        {
          name: '画矩形',
          src: 'rectangle.png',
          alt: 'rectangle'
        },
        {
          name: '测距',
          src: 'ruler.png',
          alt: 'ruler'
        },
        {
          name: '测面',
          src: 'area.png',
          alt: 'area'
        },
        {
          name: '清空',
          src: 'clear.png',
          alt: 'clear'
        }
      ],
      markerArr: [],
      markersGroup: null
    }
  },
  methods: {
    toDraw (alt) {
      this.$emit('toDraw', alt)
    }
  }
}
</script>

<style lang="scss" scoped>
.tools {
  display: flex;
  flex-direction: column;
  z-index: 999;
  .all {
    background: #ffffff;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -1px;
    border: 1px solid #d9d9d9;
    cursor: pointer;
    .actived {
      background: #d9d9d9;
    }
    &:last-child {
      margin-top: 20px;
    }
    &:hover {
      background: #d9d9d9;
    }
  }
}
</style>
