<template>
  <div class="abouts">
    <div>
      <img src="@/assets/home/aboutme.jpg"
           alt="about"
           width="240">
    </div>
    <div>
      <p v-for="item in msg"
         :key="item.id">
        <span :class="item.icon"></span>
        <span> {{ `${item.title}：${item.content}` }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
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
          icon: 'icon iconfont icon-xuexiao'
        },
        {
          id: '3',
          title: '职位',
          content: 'Web前端开发工程师',
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
.abouts {
  min-height: 500px;
  background: #3d4557;
  display: flex;
  color: #fff;
  div {
    flex: 1;
    &:first-child {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      img {
        margin-right: 100px;
      }
    }
    &:last-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        height: 40px;
        line-height: 40px;
        font-size: 18px;
      }
    }
  }
  .icon {
    font-size: 30px;
    margin-right: 10px;
  }
}
</style>
