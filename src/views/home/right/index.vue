<template>
  <div>
    <div class="date">
      <date-data></date-data>
    </div>
    <div class="sewage">
      <name-title slotType="name"
                  img="nameBack.png">
        <template v-slot:name>
          污水厂
        </template>
      </name-title>
      <sewage-data></sewage-data>
    </div>
    <div class="emission">
      <name-title slotType="name"
                  img="nameBack.png">
        <template v-slot:name>
          废气/废水
        </template>
      </name-title>
      <emission-data></emission-data>
    </div>
    <div class="message">
      <name-title slotType="name"
                  img="nameBack.png">
        <template v-slot:name>
          数据滚动信息
        </template>
      </name-title>
      <message-data></message-data>
    </div>
  </div>
</template>

<script>
import NameTitle from './../NameTitle'
import dateData from './date/index'
import sewageData from './sewage/index'
import emissionData from './emission/index'
import messageData from './message/index'
export default {
  name: 'Index',
  components: {
    NameTitle,
    dateData,
    sewageData,
    emissionData,
    messageData
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.date {
  flex: 2;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
}

.sewage {
  flex: 3;
}

.emission,
.message {
  flex: 4;
}

.sewage .home-title,
.emission .home-title,
.message .home-title {
  margin-left: 0;
}
</style>
