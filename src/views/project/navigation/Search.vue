<template>
  <div class="search">
    <div class="box">
      <el-input v-model="input"
                prefix-icon="el-icon-service"
                placeholder="请输入搜索内容"
                clearable
                @clear="search">
        <i slot="suffix"
           class="el-icon-search suffix"
           @click="search"></i>
      </el-input>
      <div class="reminder">
        <span v-for="(item,index) in reminder"
              :key="index"
              @click="toSearch(item)">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      input: '',
      reminder: ['Github', 'Element', 'ECharts', 'Iconfont', '力扣']
    }
  },
  methods: {
    search () {
      this.$emit('search', this.input)
    },
    toSearch (name) {
      this.input = name
      this.search()
    }
  }
}
</script>

<style lang='scss' scoped>
$color-back: #ffffff;
.search {
  position: relative;
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $color-back;
  .box {
    position: relative;
    width: 60%;
    .reminder {
      position: absolute;
      left: 30px;
      bottom: -30px;
      span {
        cursor: pointer;
        background: #f7f7f7;
        padding: 4px 10px;
        border-radius: 4px;
        font-size: 12px;
        &:hover {
          background: #ccc;
        }
        &:not(:first-child) {
          margin-left: 10px;
        }
      }
    }
  }
  /deep/ .el-input__inner {
    border-radius: 20px;
  }

  /deep/ .el-input__icon {
    font-weight: bold;
  }

  .suffix {
    width: 30px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    cursor: pointer;
    font-weight: bold;
  }
  /deep/ .el-input__suffix {
    width: 30px;
    .el-icon-circle-close:before {
      position: absolute;
      top: 0;
      right: 30px;
      font-size: 16px;
    }
  }
}
</style>
