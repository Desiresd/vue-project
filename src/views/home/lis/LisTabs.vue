<template>
  <div>
    <a-tabs default-active-key="1"
            @change="callback">
      <a-tab-pane key="1"
                  tab="Tab 1">
        Content of Tab Pane 1
      </a-tab-pane>
      <a-tab-pane key="2"
                  tab="Tab 2"
                  force-render>
        Content of Tab Pane 2
      </a-tab-pane>
      <a-tab-pane key="3"
                  tab="Tab 3">
        Content of Tab Pane 3
      </a-tab-pane>
    </a-tabs>
    <high-light>{{ msgH }}</high-light>

    <a-tabs default-active-key="1"
            tabPosition="left"
            @change="callback">
      <a-tab-pane key="1"
                  tab="Tab 1">
        Content of Tab Pane 1
      </a-tab-pane>
      <a-tab-pane key="2"
                  tab="Tab 2"
                  force-render>
        Content of Tab Pane 2
      </a-tab-pane>
      <a-tab-pane key="3"
                  tab="Tab 3">
        Content of Tab Pane 3
      </a-tab-pane>
    </a-tabs>
    <high-light>{{ msgV }}</high-light>
  </div>
</template>
<script>
import HighLight from '@/components/lis/HighLight'
export default {
  name: 'LisTabs',
  components: {
    HighLight
  },
  data () {
    return {
      msgH: '',
      msgV: ''
    }
  },
  created () {
    this.msgH = `<template>
      <a-tabs default-active-key="1" @change="callback">
        <a-tab-pane key="1" tab="Tab 1">
          Content of Tab Pane 1
        </a-tab-pane>
        <a-tab-pane key="2" tab="Tab 2" force-render>
          Content of Tab Pane 2
        </a-tab-pane>
        <a-tab-pane key="3" tab="Tab 3">
          Content of Tab Pane 3
        </a-tab-pane>
      </a-tabs>
    </template>
    
    export default {
      methods: {
        callback (key) {
          console.log(key)
        }
      }
    }`

    this.msgV = `<template>
      <a-tabs default-active-key="1" tabPosition="left" @change="callback">
        <a-tab-pane key="1" tab="Tab 1">
          Content of Tab Pane 1
        </a-tab-pane>
        <a-tab-pane key="2" tab="Tab 2" force-render>
          Content of Tab Pane 2
        </a-tab-pane>
        <a-tab-pane key="3" tab="Tab 3">
          Content of Tab Pane 3
        </a-tab-pane>
      </a-tabs>
    </template>
    
    export default {
      methods: {
        callback (key) {
          console.log(key)
        }
      }
    }`
  },
  methods: {
    callback (key) {
      console.log(key)
    }
  }
}
</script>
