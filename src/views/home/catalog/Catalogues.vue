<template>
  <div class="catalogues">
    <catalogue-page class="quarter"
                    :list="list[0]" />
    <catalogue-page class="quarter"
                    :list="list[1]" />
  </div>
</template>

<script>
import CataloguePage from './Catalogue'
export default {
  name: 'Catalogues',
  components: {
    CataloguePage
  },
  props: {
    list: {
      type: Array,
      default: () => { return [] }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.catalogues {
  display: flex;
  flex-direction: row-reverse;
}
</style>
