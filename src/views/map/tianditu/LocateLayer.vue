<template>
  <position-right title="定位图层Demo">
    <div class="list">
      <position-list-span v-for="(item,index) in value"
                          :key="index"
                          :item="item"
                          @select="selectSpan" />
    </div>
  </position-right>
</template>

<script>
import PositionRight from '@/components/map/PositionRight'
import PositionListSpan from '@/components/map/PositionListSpan'
export default {
  components: {
    PositionRight,
    PositionListSpan
  },
  props: {
    value: Array
  },
  methods: {
    selectSpan (item) {
      this.$emit('select', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  height: calc(100% - 40px);
  box-sizing: border-box;
  padding: 5px 8px;
  overflow-y: auto;
}
</style>
