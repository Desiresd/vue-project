<template>
  <div>
    <lis-table :columns="columns"
               :tableData="tableData"
               :scroll="{x: 1200}">

    </lis-table>
  </div>
</template>

<script>
import LisTable from '@/components/lis/LisTable'
export default {
  name: 'LisTables',
  components: {
    LisTable
  },
  data () {
    return {
      columns: [
        {
          title: '类型',
          dataIndex: 'contractPackageType',
          width: '200px',
          align: 'center',
          scopedSlots: { customRender: 'contractPackageType' }
        },
        {
          title: '编号',
          dataIndex: 'contractPackageNo',
          width: '200px',
          align: 'center',
          scopedSlots: { customRender: 'contractPackageNo' }
        },
        {
          title: '概述',
          dataIndex: 'contractPackageRemark',
          width: '200px',
          align: 'center',
          scopedSlots: { customRender: 'contractPackageRemark' }
        },
        {
          title: '预计金额(元)',
          dataIndex: 'estimatedTotalInvest',
          width: '200px',
          align: 'center',
          scopedSlots: { customRender: 'estimatedTotalInvest' }
        },
        {
          title: '采购方式',
          dataIndex: 'purchasingMethod',
          width: '200px',
          align: 'center',
          scopedSlots: { customRender: 'purchasingMethod' }
        },
        {
          title: '公告时间',
          dataIndex: 'planYear',
          width: '200px',
          align: 'center',
          scopedSlots: { customRender: 'planYear' }
        },
        {
          title: '备注',
          dataIndex: 'remark',
          width: '200px',
          align: 'center',
          ellipsis: true,
          scopedSlots: { customRender: 'remark' }
        },
        {
          title: '操作',
          width: 200,
          align: 'center',
          scopedSlots: { customRender: 'action' },
          fixed: 'right'
        }
      ],
      tableData: [
        {

        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
