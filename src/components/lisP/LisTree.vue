<template>
  <div>
    <a-tree :tree-data="treeData"
            :show-icon="showIcon"
            :replaceFields="replaceFields"
            :checkable="checkable"
            :checkedKeys="checkedKeys"
            @select="onSelect"
            @check="onCheck">
      <a-icon slot="project"
              type="file-search" />
      <a-icon slot="subProject"
              type="snippets" />
    </a-tree>
  </div>
</template>

<script>
export default {
  name: 'LisTree',
  props: {
    treeData: Array,
    showIcon: Boolean,
    replaceFields: Object,
    checkable: {
      type: Boolean,
      default: () => { return false }
    },
    checkedKeys: Array
  },
  data () {
    return {

    }
  },
  methods: {
    onSelect (key, event) {
      this.$emit('onSelect', key, event)
    },
    onCheck (key, event) {
      this.$emit('onCheck', key, event)
    }
  }
}
</script>

<style scoped>
</style>
