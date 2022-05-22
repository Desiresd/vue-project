<template>
  <div>
    <a-table bordered
             class="table"
             :rowKey="(record,index)=>{ return index }"
             :data-source="tableData"
             :columns="columns"
             size="middle"
             :pagination="false"
             :loading="tableLoad"
             :scroll="scroll">
      <slot></slot>
    </a-table>
  </div>
</template>

<script>
export default {
  name: 'LisTable',
  props: {
    tableData: Array,
    columns: Array,
    scroll: Object
  },
  data () {
    return {
      tableLoad: false
    }
  }
}
</script>

<style scoped>
.table {
  position: relative;
  padding: 10px;
}
</style>
