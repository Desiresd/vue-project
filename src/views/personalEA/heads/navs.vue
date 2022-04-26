<template>
  <ul class="navs">
    <li v-for="item in navData"
        :key="item.id"
        @click="toPath(item.id)">
      <div>{{ item.nameCn }}</div>
      <div>{{ item.nameEn }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'navs',
  data () {
    return {
      navData: [
        {
          id: '#home',
          nameCn: '网站首页',
          nameEn: 'Home'
        },
        {
          id: '#about',
          nameCn: '个人简介',
          nameEn: 'Profile'
        },
        {
          id: '#works',
          nameCn: '过往经历',
          nameEn: 'Experience'
        },
        {
          id: '#collection',
          nameCn: '个人作品集',
          nameEn: 'collection'
        }
      ]
    }
  },
  methods: {
    toPath (name) {
      location.href = name
    }
  }
}
</script>

<style lang='scss' scoped>
.navs {
  position: relative;
  list-style: none;
  display: flex;
  font-size: 16px;
  margin: unset;
  &::before {
    content: "";
    position: absolute;
    left: -100px;
    top: 0;
    width: 50px;
    height: 50px;
    overflow: hidden;
    background: url(~@/assets/logo.jpg);
    background-size: cover;
    border-radius: 50%;
  }
  li {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    div {
      text-align: center;
    }
    div:last-child {
      margin-top: 8px;
    }
    &:not(:last-child) {
      margin-right: 100px;
    }
  }
}
</style>
