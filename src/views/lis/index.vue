<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed"
                    :trigger="null"
                    collapsible
                    :style="{minHeight: '100vh'}">
      <div class="logo" />
      <a-menu theme="dark"
              mode="inline"
              :defaultOpenKeys="['0']">
        <template v-for="item in sideData">
          <a-menu-item v-if="!item.children"
                       :key="item.key">
            <a-icon type="pie-chart" />
            <span>{{ item.name }}</span>
          </a-menu-item>
          <sub-menu v-else
                    :key="item.key"
                    :menu-info="item" />
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon class="trigger"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="() => (collapsed = !collapsed)" />

        <lis-button type="primary"
                    @click="showCode">显示代码</lis-button>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { lisSide } from '@/json/lisSide.js'
import { Menu } from 'ant-design-vue'
import LisButton from '@/components/lis/LisButton'
const SubMenu = {
  template: `
      <a-sub-menu :key="menuInfo.key" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <a-icon type="mail" /><span>{{ menuInfo.name }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.key">
            <span>{{ item.name }}</span>
            <router-link :to="item.route"/>
          </a-menu-item>
          <sub-menu v-else :key="item.key" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
  name: 'SubMenu',
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  }
}
export default {
  components: {
    'sub-menu': SubMenu,
    LisButton
  },
  data () {
    return {
      collapsed: false,
      sideData: lisSide
    }
  },
  methods: {
    showCode () {
      this.$message.success('展示代码')
      window.open('./index', '_target')
    }
  }
}
</script>
<style scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
