<template>
  <div>
    <lis-table :columns="columns"
               :value="tableData"
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
          title: '姓名',
          dataIndex: 'name',
          width: '200px',
          align: 'center',
          scopedSlots: { customRender: 'input' }
        },
        {
          title: '性别',
          dataIndex: 'sex',
          width: '200px',
          align: 'center',
          scopedSlots: { customRender: 'select' }
        },
        {
          title: '年龄',
          dataIndex: 'age',
          width: '200px',
          align: 'center',
          scopedSlots: { customRender: 'inputNumber' }
        },
        {
          title: '存款(元)',
          dataIndex: 'money',
          width: '200px',
          align: 'center',
          formatter: true,
          scopedSlots: { customRender: 'inputNumber' }
        },
        {
          title: '时间(单)',
          dataIndex: 'date',
          width: '200px',
          align: 'center',
          scopedSlots: { customRender: 'date' }
        },
        {
          title: '时间(双)',
          dataIndex: 'dateStart',
          dataIndexT: 'dateEnd',
          width: '350px',
          align: 'center',
          scopedSlots: { customRender: 'dateArea' }
        },
        {
          title: '时间(年)',
          dataIndex: 'dateYear',
          width: '200px',
          align: 'center',
          scopedSlots: { customRender: 'dateYear' }
        },
        {
          title: '备注',
          dataIndex: 'remark',
          width: '200px',
          align: 'center',
          scopedSlots: { customRender: 'textArea' }
        },
        {
          title: '操作',
          width: 150,
          align: 'center',
          fixed: 'right',
          scopedSlots: { customRender: 'action' }
        }
      ],
      tableData: [
        {
          name: 'mo1',
          sex: '0',
          age: '18',
          money: 10000,
          date: '2022-05-01',
          dateStart: '2022-05-01',
          dateEnd: '2022-05-21',
          dateYear: '2022',
          remark: '我是备注我是备注我是备注我是备注'
        },
        {
          name: 'mo2',
          sex: '1',
          age: '22',
          money: 80000,
          date: '2022-05-01',
          dateStart: '2022-05-01',
          dateEnd: '2022-05-22',
          dateYear: '2023',
          remark: '我是备注我是备注我是备注我是备注'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
