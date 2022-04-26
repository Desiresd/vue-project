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
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { Menu } from 'ant-design-vue'
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
    'sub-menu': SubMenu
  },
  data () {
    return {
      collapsed: false,
      sideData: [
        {
          key: '0',
          name: '布局前端化',
          children: [
            {
              key: '0-0',
              name: 'LisRowCol',
              route: '/lis/LisRowCol'
            },
            {
              key: '0-1',
              name: 'LisSelect',
              route: '/lis/LisSelect'
            },
            {
              key: '0-2',
              name: 'LisInput',
              route: '/lis/LisInput'
            },
            {
              key: '0-3',
              name: 'LisInputNumber',
              route: '/lis/LisInputNumber'
            },
            {
              key: '0-4',
              name: 'LisTextArea',
              route: '/lis/LisTextArea'
            },
            {
              key: '0-5',
              name: 'LisDate',
              route: '/lis/LisDate'
            },
            {
              key: '0-6',
              name: 'LisTime',
              route: '/lis/LisTime'
            },
            {
              key: '0-7',
              name: 'LisSpin',
              route: '/lis/LisSpin'
            },
            {
              key: '0-8',
              name: 'LisSwitch',
              route: '/lis/LisSwitch'
            },
            {
              key: '0-9',
              name: 'LisButton',
              route: '/lis/LisButton'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style>
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
