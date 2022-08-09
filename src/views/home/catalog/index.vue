<template>
  <div class="catalog">
    <caption-page class="quarter" />
    <catalogues-page class="quarter"
                     :list="catalogList.slice(0,2)" />
    <catalogues-page class="quarter"
                     :list="catalogList.slice(4,6)" />
    <catalogues-page class="quarter"
                     :list="catalogList.slice(2,4)" />
    <dot-line />
  </div>
</template>

<script>
import { catalog } from '@/json/catalog.js'
import CaptionPage from './Caption'
import CataloguesPage from './Catalogues'
import DotLine from './Dotline'
export default {
  name: 'index',
  components: {
    CaptionPage,
    CataloguesPage,
    DotLine
  },
  data () {
    return {
      catalogList: catalog
    }
  }
}
</script>

<style lang='scss' scoped>
$color-back: #f7f7f7;
$color-text: #1d2033;
.catalog {
  position: relative;
  width: 100vw;
  height: 100vh;
  min-width: 1100px;
  min-height: 700px;
  background: $color-back;
  color: $color-text;
  display: flex;
  flex-wrap: wrap;
  .quarter {
    width: 50%;
    height: 50%;
  }
}
</style>
