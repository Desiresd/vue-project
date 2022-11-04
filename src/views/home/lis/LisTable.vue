<template>
  <div>
    <lis-table ref="lisTable"
               :columns="columns"
               :value="tableData"
               :scroll="{x: 1200}"
               @save="save"
               @deleted="deleted">

    </lis-table>
  </div>
</template>

<script>
import LisTable from '@/components/lis/LisTable'
let DataJson = [
  {
    id: '1',
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
    id: '2',
    name: 'mo2',
    sex: '1',
    age: '22',
    money: 80000,
    date: '2022-05-01',
    dateStart: '2022-05-01',
    dateEnd: '2022-05-22',
    dateYear: '2023',
    remark: '我是备注我是备注我是备注我是备注'
  },
  {
    id: '3',
    name: 'mo3',
    sex: '1',
    age: '33',
    money: 80000,
    date: '2022-05-01',
    dateStart: '2022-05-01',
    dateEnd: '2022-05-22',
    dateYear: '2023',
    remark: '我是备注我是备注我是备注我是备注'
  },
  {
    id: '4',
    name: 'mo4',
    sex: '1',
    age: '44',
    money: 80000,
    date: '2022-05-01',
    dateStart: '2022-05-01',
    dateEnd: '2022-05-22',
    dateYear: '2023',
    remark: '我是备注我是备注我是备注我是备注'
  },
  {
    id: '5',
    name: 'mo5',
    sex: '1',
    age: '55',
    money: 80000,
    date: '2022-05-01',
    dateStart: '2022-05-01',
    dateEnd: '2022-05-22',
    dateYear: '2023',
    remark: '我是备注我是备注我是备注我是备注'
  },
  {
    id: '6',
    name: 'mo6',
    sex: '1',
    age: '66',
    money: 80000,
    date: '2022-05-01',
    dateStart: '2022-05-01',
    dateEnd: '2022-05-22',
    dateYear: '2023',
    remark: '我是备注我是备注我是备注我是备注'
  },
  {
    id: '7',
    name: 'mo7',
    sex: '1',
    age: '77',
    money: 80000,
    date: '2022-05-01',
    dateStart: '2022-05-01',
    dateEnd: '2022-05-22',
    dateYear: '2023',
    remark: '我是备注我是备注我是备注我是备注'
  }
]
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
          title: '时间(单/年)',
          dataIndex: 'date',
          colSpan: 2,
          width: '200px',
          align: 'center',
          scopedSlots: { customRender: 'date' }
        },
        {
          title: '时间(年)',
          dataIndex: 'dateYear',
          colSpan: 0,
          width: '200px',
          align: 'center',
          scopedSlots: { customRender: 'dateYear' }
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
      tableData: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.tableData = DataJson
    },
    save (record, index) {
      // 这里做保存的请求操作
      // .....

      // 这里做刷新操作
      this.$refs.lisTable.handleSave(index)
      this.$message.success('保存成功')
    },
    deleted (record, current) {
      // 这里做删除的请求操作
      // .....

      // 这里做刷新操作 - 获取数据
      this.$message.success('删除成功' + current)
    }
  }
}
</script>

<style scoped>
</style>
