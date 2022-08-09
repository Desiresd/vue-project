<template>
  <div class="navs-page">
    <search-page />
    <list-box />
  </div>
</template>

<script>
import SearchPage from './Search'
import ListBox from './ListBox'
export default {
  name: 'index',
  components: {
    SearchPage,
    ListBox
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
$color-back: #f7f7f7;
.navs-page {
  background: $color-back;
}
</style>
