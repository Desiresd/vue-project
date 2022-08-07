<template>
  <div class="warn-list">
    <warn-collect v-for="(item,index) in warnData"
                  :key="index"
                  :item="item" />
  </div>
</template>

<script>
import WarnCollect from './WarnCollect'
export default {
  name: 'Index',
  components: {
    WarnCollect
  },
  data () {
    return {
      warnData: [
        {
          reason: '有人落水之类的详细信息有人落水之类的详细信息',
          location: '聊城市',
          person: '人员1',
          time: '11:45'
        },
        {
          reason: '有人落水之类的详细信息',
          location: '聊城市',
          person: '人员1',
          time: '11:45'
        },
        {
          reason: '有人落水之类的详细信息',
          location: '聊城市',
          person: '人员1',
          time: '11:45'
        },
        {
          reason: '有人落水之类的详细信息',
          location: '聊城市',
          person: '人员1',
          time: '11:45'
        },
        {
          reason: '有人落水之类的详细信息',
          location: '聊城市',
          person: '人员1',
          time: '11:45'
        },
        {
          reason: '有人落水之类的详细信息',
          location: '聊城市',
          person: '人员1',
          time: '11:45'
        },
        {
          reason: '有人落水之类的详细信息',
          location: '聊城市',
          person: '人员1',
          time: '11:45'
        },
        {
          reason: '有人落水之类的详细信息',
          location: '聊城市',
          person: '人员1',
          time: '11:45'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.warn-list {
  height: 220px;
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
}
</style>
