<template>
  <div>
    <div v-for="item in details"
         :key="item.id">
      <div v-html="item.html"></div>
      <high-light language="language-javascript"
                  :key="key"> {{ item.highLight }} </high-light>
    </div>
  </div>
</template>

<script>
import HighLight from '@/components/lis/HighLight'
export default {
  name: 'containerView',
  components: {
    HighLight
  },
  props: {
    details: Array
  },
  watch: {
    details: {
      handler () {
        ++this.key
      },
      immediate: true
    }
  },
  data () {
    return {
      key: 0
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
