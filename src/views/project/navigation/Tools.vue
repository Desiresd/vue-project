<template>
  <div class="tools"
       :id=" title ? 0 :tools[0].navsId">
    <h3>{{ title ? title : tools[0].navsName }}</h3>
    <el-row :gutter="20">
      <el-col :xs="8"
              :sm="8"
              :md="6"
              :lg="4"
              :xl="4"
              v-for="(item,index) in tools"
              :key="index">
        <div class="content"
             @click="toPath(item.url)">
          <div>
            <el-image :src="require('@/assets/navigation/'+ item.image)"
                      :style="{ width: '30px'}" />
          </div>
          <div class="des">
            <span v-html="item.name"></span>
            <span v-html="item.des"></span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Tools',
  props: {
    title: {
      type: String,
      default: () => { return '' }
    },
    tools: {
      type: Array,
      default: () => { return [] }
    }
  },
  data () {
    return {

    }
  },
  methods: {
    toPath (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style lang='scss' scoped>
$color-back: #ffffff;
$color-hover: #f5f5f5;
.tools {
  background: $color-back;
  border-radius: 4px;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 20px 30px;
  .content {
    height: 60px;
    display: flex;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    padding: 0 10px;
    margin-top: 10px;
    border-radius: 4px;
    &:hover {
      background: $color-hover;
    }
    .des {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      span {
        flex: 1;
        &:first-child {
          font-weight: bold;
        }
        &:last-child {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
