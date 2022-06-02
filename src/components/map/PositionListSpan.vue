<template>
  <div class="position-list-span"
       @click="selectSpan">
    <div>
      <span>项目名称：{{ item && item.name ? item.name: '' }}</span>
    </div>
    <div>
      <span>总投资：{{ item && item.total ? item.total: '' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    selectSpan () {
      this.$emit('select', this.item)
    }
  }
}
</script>

<style lang="scss" scoped>
.position-list-span {
  width: 100%;
  background: #e5eff8;
  color: #000;
  box-sizing: border-box;
  padding: 10px 30px;
  margin-top: 5px;
  border-radius: 2px;
  cursor: pointer;
}

.position-list-span:hover {
  background: #d7e7f4;
}

.position-list-span div:last-child {
  margin-top: 5px;
}
</style>
