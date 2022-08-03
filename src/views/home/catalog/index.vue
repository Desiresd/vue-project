<template>
  <div class="catalog">
    <caption-page class="quarter" />
    <catalogues-page class="quarter"
                     :list="articleList.slice(0,2)" />
    <catalogues-page class="quarter"
                     :list="articleList.slice(4,6)" />
    <catalogues-page class="quarter"
                     :list="articleList.slice(2,4)" />
    <dot-line />
  </div>
</template>

<script>
import CaptionPage from './Caption'
import CataloguesPage from './Catalogues'
import DotLine from './Dotline'
export default {
  name: 'index',
  components: {
    CaptionPage,
    CataloguesPage,
    DotLine
  },
  data () {
    return {
      articleList: [
        {
          head: '第一章·个人资料',
          catalog: [
            {
              key: '一',
              name: '个人简介',
              router: 'personalEA'
            },
            {
              key: '二',
              name: '职业技能',
              router: ''
            },
            {
              key: '三',
              name: '工作经历',
              router: ''
            },
            {
              key: '四',
              name: '占位占位占位',
              router: ''
            },
            {
              key: '五',
              name: '占位占位占位',
              router: ''
            }
          ]
        },
        {
          head: '第二章·学习集合',
          catalog: [
            {
              key: '一',
              name: '算法练习',
              router: ''
            },
            {
              key: '二',
              name: '习题汇总',
              router: ''
            },
            {
              key: '三',
              name: 'AntDesign二次封装',
              router: ''
            },
            {
              key: '四',
              name: '占位占位占位',
              router: ''
            },
            {
              key: '五',
              name: '占位占位占位',
              router: ''
            }
          ]
        },
        {
          head: '第三章·作品合集①',
          catalog: [
            {
              key: '一',
              name: '占位占位占位',
              router: ''
            },
            {
              key: '二',
              name: '占位占位占位',
              router: ''
            },
            {
              key: '三',
              name: '占位占位占位',
              router: ''
            },
            {
              key: '四',
              name: '占位占位占位',
              router: ''
            },
            {
              key: '五',
              name: '占位占位占位',
              router: ''
            }
          ]
        },
        {
          head: '第四章·作品合集②',
          catalog: [
            {
              key: '一',
              name: '占位占位占位',
              router: ''
            },
            {
              key: '二',
              name: '占位占位占位',
              router: ''
            },
            {
              key: '三',
              name: '占位占位占位',
              router: ''
            },
            {
              key: '四',
              name: '占位占位占位',
              router: ''
            },
            {
              key: '五',
              name: '占位占位占位',
              router: ''
            }
          ]
        },
        {
          head: '第五章·作品合集③',
          catalog: [
            {
              key: '一',
              name: '占位占位占位',
              router: ''
            },
            {
              key: '二',
              name: '占位占位占位',
              router: ''
            },
            {
              key: '三',
              name: '占位占位占位',
              router: ''
            },
            {
              key: '四',
              name: '占位占位占位',
              router: ''
            },
            {
              key: '五',
              name: '占位占位占位',
              router: ''
            }
          ]
        },
        {
          head: '第六章·作品合集④',
          catalog: [
            {
              key: '一',
              name: '占位占位占位',
              router: ''
            },
            {
              key: '二',
              name: '占位占位占位',
              router: ''
            },
            {
              key: '三',
              name: '占位占位占位',
              router: ''
            },
            {
              key: '四',
              name: '占位占位占位',
              router: ''
            },
            {
              key: '五',
              name: '占位占位占位',
              router: ''
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
$color-back: #f7f7f7;
$color-text: #1d2033;
.catalog {
  position: relative;
  width: 100vw;
  height: 100vh;
  min-width: 1100px;
  min-height: 700px;
  background: $color-back;
  color: $color-text;
  display: flex;
  flex-wrap: wrap;
  .quarter {
    width: 50%;
    height: 50%;
  }
}
</style>
