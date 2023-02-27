<template>
  <div>
    <back-drop icon="el-icon-time"
               titleCN="项目经历"
               titleEN="Project Experience">
      <div class="means">
        <el-timeline>
          <el-timeline-item v-for="(live, index) in msg"
                            :key="index"
                            :color="'$color-text'"
                            :timestamp="live.timestamp">
            <p class="text-size-lg text-bold">{{  `公司名称：${live.company}` }}</p>
            <div v-for="item in live.project"
                 :key="item.name"
                 class="project">
              <div class="text-bold text-icon">{{ `项目名称：${item.name}` }}</div>
              <div class="des">
                <span>项目描述：</span>
                <span>
                  {{ item.description }}
                </span>
              </div>
              <div>{{ `所用技术：${item.skills}` }}</div>
              <div class="des">
                <span>个人职责：</span>
                <span>
                  {{ item.works }}
                </span>
              </div>
              <div v-show="hasImages(item.imageUrl)"
                   class="des">
                <span>作品截图：</span>
                <span>
                  <el-image v-for="(items,indexs) in item.imageUrl"
                            :key="indexs"
                            :title="items"
                            style="width: 120px; height: 60px"
                            :src="require(`@/assets/works${items}`)"
                            :preview-src-list="reviewImages(item.imageUrl)">
                  </el-image>
                </span>
              </div>
            </div>
          </el-timeline-item>
        </el-timeline>
      </div>
    </back-drop>
  </div>
</template>

<script>
import BackDrop from './../BackDrop'
export default {
  name: 'projects',
  components: {
    BackDrop
  },
  data () {
    return {
      msg: [
        {
          company: '中科软科技股份有限公司（南宁）',
          timestamp: '2021-06 至 至今',
          project: [
            {
              name: '国际金融组织贷款项目管理信息系统（政府）',
              skills: 'Vue、AntDesign、Axios、Echarts',
              works: '高质量完成代码编写并符合团队规范，高度还原视觉稿',
              description: `本项目采用前后端分离、技术与业务分离、业务按功能分离的思想进行建设。前端使用Vue框架MVVM开发模型，使用Webpack进行代码管理。`,
              imageUrl: []
            },
            {
              name: '聊城市三线一单减污降碳协同管控平台',
              skills: 'Vue、AntDesign、Axios、Echarts、天地图、Leaflet等',
              works: '完成山东省聊城市生态环境局智慧环境大数据平台开发，对大气污染物、二氧化碳污染物排放量情况进行实时展示和监测。',
              description: `该信息系统平台主要功能是把“三线一单”和减污降碳协同起来，监管重点地区企业大气污染物和二氧化碳排放量情况。`
            }
          ]
        },
        {
          company: '广西七三科技有限公司',
          timestamp: '2021-01 至 2021-04',
          project: [
            {
              name: '七三课堂（教育）',
              skills: 'Vue、Element、flyio',
              works: '根据 UI 设计稿进行页面开发及优化',
              description: `本项目采用前后端分离技术，前端通过Flyio请求数据，页面集成课堂的视频教程内容。`,
              imageUrl: [
                '/qs/1.png',
                '/qs/2.png',
                '/qs/3.png',
                '/qs/4.png',
                '/qs/5.png'
              ]
            },
            {
              name: '3D 组课（教育）',
              skills: 'Vue、Element、flyio、Echarts',
              works: '根据 UI 设计稿进行页面开发及优化',
              description: '本项目采用前后端分离技术，前端通过Flyio请求数据，页面集成课堂的视频教程内容。',
              imageUrl: [
                '/qs/6.png',
                '/qs/7.png',
                '/qs/8.png'
              ]
            },
            {
              name: '产品合集后台（教育）',
              skills: 'Vue、Element、Axios',
              works: '根据 UI 设计稿进行页面开发及优化',
              description: '本项目采用前后端分离技术，前端通过Flyio请求数据，页面后台链接管理内容。',
              imageUrl: [
                '/qs/9.png',
                '/qs/10.png',
                '/qs/11.png'
              ]
            }
          ]
        },
        {
          company: '同征网络科技有限公司',
          timestamp: '2020-06 至 2021-01',
          project: [
            {
              name: '同城酒柜商城 (新零售)',
              skills: 'H5、CSS3、JS、JQuery、Uni-app、Layui、BootStrap',
              works: '负责PC端、移动H5和小程序等前端业务开发，高度还原 UI 设计稿',
              description: '本项目用“线上商城+线下前置仓”模式，通过线上自建微信商城端、小程序、PC端等平台，打破酒类传统渠道，成为酒水市场新零售的领潮者。',
              imageUrl: [
                '/tz/1.png',
                '/tz/2.png',
                '/tz/3.png',
                '/tz/4.png',
                '/tz/5.png',
                '/tz/6.png'
              ]
            },
            {
              name: '同城酒帮小程序 (新零售)',
              skills: '微信小程序（原生）',
              works: '根据 UI 设计稿进行页面开发及优化',
              description: '本项目用“线上商城+线下前置仓”模式，通过线上自建小程序、PC端等平台，打破酒类传统渠道，成为酒水市场新零售的领潮者。',
              imageUrl: [
                '/tz/7.png'
              ]
            },
            {
              name: '同城酒柜后台管理系统 (新零售)',
              skills: 'Vue、Element、Axios、Echarts',
              works: '根据 UI 设计稿进行页面开发及优化',
              description: '本系统采用前后端分离技术，集合商铺、酒的信息和订单信息。',
              imageUrl: [
                '/tz/8.png',
                '/tz/9.png',
                '/tz/10.png',
                '/tz/11.png',
                '/tz/12.png',
                '/tz/13.png'
              ]
            }
          ]
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
  max-height: 90%;
  overflow-y: scroll;
  .el-timeline {
    margin: 50px 0 0 200px;
    width: 700px;
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

  .text-icon {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -29px;
      top: 10px;
      width: 10px;
      height: 10px;
      background: $color-text;
      border-radius: 50%;
    }
  }
  .des {
    display: flex;
    span {
      &:first-child {
        white-space: nowrap;
      }
    }
  }
  .project {
    margin-top: 10px;
  }
  .el-image {
    margin-right: 5px;
  }
  p {
    letter-spacing: 2px;
  }
  span {
    letter-spacing: 1px;
  }
}
</style>
