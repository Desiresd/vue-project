<template>
  <div>
    <back-drop icon="el-icon-bell"
               titleCN="工作经历"
               titleEN="Work Experience">
      <div class="means">
        <el-timeline>
          <el-timeline-item v-for="(live, index) in msg"
                            :key="index"
                            :color="'$color-text'"
                            :timestamp="live.timestamp">
            <p class="text-size-lg text-bold">{{  `公司名称：${live.company}` }}</p>
          </el-timeline-item>
        </el-timeline>
      </div>
    </back-drop>
  </div>
</template>

<script>
import BackDrop from './../BackDrop'
export default {
  name: 'works',
  components: {
    BackDrop
  },
  data () {
    return {
      msg: [
        {
          company: '中科软科技股份有限公司（南宁）',
          timestamp: '2021-06 至 至今'
        },
        {
          company: '广西七三科技有限公司',
          timestamp: '2021-01 至 2021-04'
        },
        {
          company: '同征网络科技有限公司',
          timestamp: '2020-06 至 2021-01'
        }
      ]
    }
  },
  computed: {
    hasImages () {
      return (value) => {
        return !!(value && value.length > 0)
      }
    },
    reviewImages () {
      return (value) => {
        if (!!value === false) return []
        // 基础本
        // const array = []
        // for (let i = 0; i < value.length; i++) {
        //   array[i] = require(`@/assets/works${value[i]}`)
        // }
        // 优化版
        const array = value.map(item => {
          return require(`@/assets/works${item}`)
        })
        return array
      }
    }
  }
}

</script>

<style lang='scss' scoped>
$color-black: rgba(0, 0, 0, 0.9);
$color-text: #d9d7e1; // 字体色
.means {
  background: $color-black;
  padding: 50px 40px 32px 40px;
  border-radius: 10px;
  color: $color-text;
  .el-timeline {
    margin: 50px 0 0 200px;
    /deep/ .el-timeline-item__timestamp.is-bottom {
      position: absolute;
      left: -220px;
      top: -3px;
      color: #333333;
      color: $color-text;
      font-size: 18px;
    }
    /deep/ .el-timeline-item__content {
      color: $color-text;
      font-size: 16px;
      line-height: 30px;
    }
  }
  .text-size-lg {
    font-size: 18px;
  }
  .text-bold {
    font-weight: bold;
  }
  p {
    letter-spacing: 2px;
  }
}
</style>
