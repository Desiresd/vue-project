<template>
  <div>
    <stick-note :item="item" />
  </div>
</template>

<script>
import StickyNote from '@/components/module/StickyNote'
export default {
  name: 'test',
  components: {
    StickyNote
  },
  data () {
    return {
      item: [
        '一路上追逐奔波，',
        '最后想要的，',
        '只不过是宁静的幸福。',
        '张小娴'
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
