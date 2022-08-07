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
import { totalFruit } from '@/common/leetCode/totalFruit.js'
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
  },
  created () {
    let tree = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]
    console.log(totalFruit(tree))
  }
}
</script>

<style lang='scss' scoped>
</style>
