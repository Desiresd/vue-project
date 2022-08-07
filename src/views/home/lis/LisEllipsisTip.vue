<template>
  <div>
    <lis-row style="margin-top: 80px;">

      <lis-col :span="24">
        <lis-ellipsis-tip :value="content" />
      </lis-col>
      <lis-col :span="24">
        <lis-ellipsis-tip :value="content"
                          :length="10" />
      </lis-col>
      <lis-col :span="24">
        <lis-ellipsis-tip :value="content"
                          location="right" />
      </lis-col>
    </lis-row>
    <high-light>{{ msg }}</high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lis/HighLight'
import LisRow from '@/components/lis/LisRow'
import LisCol from '@/components/lis/LisCol'
import LisEllipsisTip from '@/components/lis/LisEllipsisTip'
export default {
  name: 'LisEllipsisTips',
  components: {
    HighLight,
    LisRow,
    LisCol,
    LisEllipsisTip
  },
  data () {
    return {
      msg: '',
      content: '在开始之前，推荐先学习 Vue 和 ES2015，并正确安装和配置了 Node.js v8.9 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Vue 的正确开发方式。如果你刚开始学习前端或者 Vue，将 UI 框架作为你的第一步可能不是最好的主意。'
    }
  },
  created () {
    this.msg = `<template>
      <lis-ellipsis-tip :value="content" />
      <lis-ellipsis-tip :value="content" :length="10"/>
      <lis-ellipsis-tip :value="content" location="right" />
    </template>`
  }
}
</script>

<style scoped>
</style>
