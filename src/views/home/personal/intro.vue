<template>
  <div>
    <back-drop icon="el-icon-edit"
               titleCN="个人简介"
               titleEN="Individual Resume">
      <div class="means">
        <p v-for="item in msg"
           :key="item.id">
          <span :class="item.icon"></span>
          <span> {{ `${item.title}：${item.content}` }}</span>
        </p>
      </div>
    </back-drop>
  </div>
</template>

<script>
import BackDrop from './../BackDrop'
import AboutPage from './../../personalEA/abouts/index'
export default {
  name: 'intro',
  components: {
    BackDrop,
    AboutPage
  },
  data () {
    return {
      msg: [
        {
          id: '1',
          title: '名字',
          content: '磨敦仁',
          icon: 'icon iconfont icon-chazhaoyonghu'
        },
        {
          id: '2',
          title: '学校',
          content: '韩山师范学院 - 软件工程专业',
          icon: 'icon iconfont icon-xuexiao_xuexiaoxinxi'
        },
        {
          id: '3',
          title: '职位',
          content: '前端开发工程师',
          icon: 'icon iconfont icon-zhiwei'
        },
        {
          id: '4',
          title: '联系',
          content: '18776065516',
          icon: 'icon iconfont icon-lianxi'
        },
        {
          id: '5',
          title: '邮箱',
          content: '1192940849@qq.com',
          icon: 'icon iconfont icon-mailboxEmpty'
        },
        {
          id: '6',
          title: 'Github',
          content: 'https://github.com/Desiresd/vue-project',
          icon: 'icon iconfont icon-github-fill'
        },
        {
          id: '7',
          title: '线上访问（已打包）',
          content: 'http://101.132.226.7/vue-project/index.html',
          icon: 'icon iconfont icon-dabao'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
$color-black: rgba(0, 0, 0, 0.9);
.means {
  background: $color-black;
  padding: 50px 40px 32px 40px;
  border-radius: 10px;
  p {
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    letter-spacing: 1px;
  }
}
</style>
