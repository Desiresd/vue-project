<template>
  <div>
    <lis-group-query :style="{ 'margin': '20px 0 30px 0' }"
                     :formTypeData="formTypeData"
                     @handleSearch="handleSearchForm"
                     @resetSearch="resetSearchForm">
    </lis-group-query>
    <lis-table ref="lisTable"
               :columns="columns"
               :rules="rules"
               :value="tableData"
               :scroll="{x: 1200}"
               :current="current"
               :pageSize="pageSize"
               :total="total"
               :tableLoad="tableLoad"
               :addLocation="'unshift'"
               :hasAdd="true"
               :hasDel="true"
               :rowSelection="true"
               @save="save"
               @deleted="deleted"
               @deletedSelect="deletedSelect"
               @paginationChange="paginationChange">
      <!-- 具名插槽-->
      <template #btn>
        <a-button type="primary"
                  @click="refreshTable()">刷新</a-button>
      </template>
      <!-- 具名+作用域插槽 -->
      <template #openrator="{ scope }">
        <a-divider type="vertical" />
        <a @click="details(scope)">详情</a>
      </template>
    </lis-table>
    <high-light>{{ msg }}</high-light>
    <lis-details ref="lisDetails"
                 :information="detailedData" />
  </div>
</template>

<script>
import HighLight from '@/components/lisP/HighLight'
import LisTable from '@/components/lisP/LisTable'
import LisDetails from './LisDetails'
import LisGroupQuery from '@/components/lisP/LisGroupQuery.vue'
let DataJson = [
  {
    id: '1',
    name: 'mo1',
    sex: '0',
    age: 18,
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
    age: 22,
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
    age: 33,
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
    age: 44,
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
    age: 55,
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
    age: 66,
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
    age: 77,
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
    HighLight,
    LisTable,
    LisDetails,
    LisGroupQuery
  },
  data () {
    return {
      msg: '',
      current: 1,
      pageSize: 5,
      total: 0,
      tableLoad: false,
      tableParams: {},
      columns: [
        {
          title: '姓名',
          name: 'name',
          dataIndex: 'name',
          width: '200px',
          align: 'center',
          placeholder: '请输入姓名',
          fixed: 'left',
          scopedSlots: { customRender: 'input' }
        },
        {
          title: '性别',
          dataIndex: 'sex',
          dictCode: 'sex',
          width: '200px',
          align: 'center',
          placeholder: '请选择性别',
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
          placeholder: '请输入备注',
          scopedSlots: { customRender: 'textArea' }
        },
        {
          title: '操作',
          width: '200px',
          align: 'center',
          fixed: 'right',
          scopedSlots: { customRender: 'action' }
        }
      ],
      tableData: [],
      rules: {
        name: [{
          required: true,
          trigger: 'change',
          message: '请输入姓名'
        }],
        sex: [{
          required: true,
          trigger: 'change',
          message: '请选择性别'
        }],
        age: [{
          required: true,
          trigger: 'change',
          message: '请输入年龄'
        }],
        money: [{
          required: true,
          trigger: 'change',
          message: '请输入存款'
        }],
        date: [{
          required: true,
          trigger: 'change',
          message: '请选择时间'
        }],
        dateYear: [{
          required: true,
          trigger: 'change',
          message: '请选择时间(年)'
        }],
        dateStart: [
          {
            required: true,
            trigger: 'change',
            message: '请选择开始时间'
          },
          {
            required: true,
            trigger: 'change',
            message: '请选择结束时间'
          }
        ],
        remark: [{
          required: true,
          trigger: 'change',
          message: '请输入备注'
        }]
      },
      detailedData: {},
      formTypeData: [
        {
          name: '名字',
          placeholderText: '名字',
          type: 'input',
          key: 'name'
        },
        {
          name: '性别',
          placeholderText: '性别',
          type: 'dict',
          dictCode: 'sex',
          key: 'sex'
        },
        {
          name: '年龄',
          placeholderText: '年龄',
          type: 'inputNumber',
          key: 'age'
        }
      ]
    }
  },
  created () {
    this.getData()
    this.msg = `<template>
      <div>
        <lis-table ref="lisTable"
                  :columns="columns"
                  :rules="rules"
                  :value="tableData"
                  :scroll="{x: 1200}"
                  :current="current"
                  :pageSize="pageSize"
                  :total="total"
                  :tableLoad="tableLoad"
                  :addLocation="'unshift'"
                  :hasAdd="true"
                  :hasDel="true"
                  @save="save"
                  @deleted="deleted"
                  @deletedSelect="deletedSelect"
                  @paginationChange="paginationChange">
          <!-- 具名插槽-->
          <template #btn>
            <a-button type="primary" @click="refreshTable()">刷新</a-button>
          </template>

          <!-- 具名+作用域插槽 -->
          <template #openrator="{ scope }">
            <a-divider type="vertical" />
            <a @click="details(scope)">详情</a>
          </template>
        </lis-table>
        <lis-details ref="lisDetails" :information="detailedData" />
      </div>
    </template>

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
      data () {
        return {
          current: 1,
          pageSize: 5,
          total: 0,
          tableLoad: false,
          columns: [
            {
              title: '姓名',
              name: 'name',
              dataIndex: 'name',
              width: '200px',
              align: 'center',
              placeholder: '请输入姓名',
              scopedSlots: { customRender: 'input' }
            },
            {
              title: '性别',
              dataIndex: 'sex',
              dictCode: 'sex',
              width: '200px',
              align: 'center',
              placeholder: '请选择性别',
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
              placeholder: '请输入备注',
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
          tableData: [],
          rules: {
            name: [{
              required: true,
              trigger: 'change',
              message: '请输入姓名'
            }],
            sex: [{
              required: true,
              trigger: 'change',
              message: '请选择性别'
            }],
            age: [{
              required: true,
              trigger: 'change',
              message: '请输入年龄'
            }],
            money: [{
              required: true,
              trigger: 'change',
              message: '请输入存款'
            }],
            date: [{
              required: true,
              trigger: 'change',
              message: '请选择时间'
            }],
            dateYear: [{
              required: true,
              trigger: 'change',
              message: '请选择时间(年)'
            }],
            dateStart: [
              {
                required: true,
                trigger: 'change',
                message: '请选择开始时间'
              },
              {
                required: true,
                trigger: 'change',
                message: '请选择结束时间'
              }
            ],
            remark: [{
              required: true,
              trigger: 'change',
              message: '请输入备注'
            }]
          },
          detailedData: {}
        }
      },
      methods: {
        getData ({ refresh = false } = {}) {
          this.total = DataJson.length
          let startSplit = (this.current - 1) * this.pageSize
          let endSplit = (startSplit + this.pageSize) > this.total ? this.total : (startSplit + this.pageSize)
          this.tableData = DataJson.slice(startSplit, endSplit)
          if (refresh) {
            this.$message.success('刷新成功')
          }
        },
        save (record, index) {
          // 这里做保存的请求操作
          // .....
          DataJson.splice((this.current - 1) * this.pageSize + index, record.state === 'add' ? 0 : 1, record)
          // 这里做刷新操作(成功后操作)
          // this.$refs.lisTable.handleSave(index)
          this.getData()
          this.$message.success('保存成功')
        },
        deleted (record, index, current) {
          // 删除的请求
          DataJson.splice((this.current - 1) * this.pageSize + index, 1)
          // 这里做刷新操作 - 获取数据
          this.current = current
          this.getData()
          this.$message.success('删除成功')
        },
        deletedSelect (keys, rows, current) {
          // 删除的请求
          let keysArr = keys.sort((a, b) => b - a)
          for (let index of keysArr) {
            DataJson.splice((this.current - 1) * this.pageSize + index, 1)
          }
          // 这里做刷新操作 - 获取数据
          this.current = current
          this.getData()
          this.$refs.lisTable.clearSelect()
          this.$message.success('删除成功')
        },
        paginationChange (current, pageSize) {
          this.current = current
          this.pageSize = pageSize
          this.getData()
        },
        refreshTable () {
          this.getData({ refresh: true })
        },
        details (scope) {
          this.$refs.lisDetails.open()
          this.detailedData = Object.assign({}, scope.text)
        }
      }
    }`
  },
  methods: {
    getData ({ refresh = false, params = {} } = {}) {
      let data = JSON.parse(JSON.stringify(DataJson))
      let paramsKeys = Object.keys(this.tableParams)
      data = data.filter(item => {
        if (paramsKeys.length === 0) return true
        return paramsKeys.every(key => {
          let flag = true
          if (key === 'name' && this.tableParams.name && !item.name.includes(this.tableParams.name)) {
            flag = false
          }
          if (key === 'sex' && this.tableParams.sex && !(item.sex === this.tableParams.sex)) {
            flag = false
          }
          if (key === 'age' && this.tableParams.age && !(item.age === this.tableParams.age)) {
            flag = false
          }
          return flag
        })
      })
      this.total = data.length
      let startSplit = (this.current - 1) * this.pageSize
      let endSplit = (startSplit + this.pageSize) > this.total ? this.total : (startSplit + this.pageSize)
      this.tableData = data.slice(startSplit, endSplit)
      if (refresh) {
        this.$message.success('刷新成功')
      }
    },
    save (record, index) {
      // 这里做保存的请求操作
      // .....
      DataJson.splice((this.current - 1) * this.pageSize + index, record.state === 'add' ? 0 : 1, record)
      // 这里做刷新操作(成功后操作)
      // this.$refs.lisTable.handleSave(index)
      this.getData()
      this.$message.success('保存成功')
    },
    deleted (record, index, current) {
      // 删除的请求
      DataJson.splice((this.current - 1) * this.pageSize + index, 1)
      // 这里做刷新操作 - 获取数据
      this.current = current
      this.getData()
      this.$message.success('删除成功')
    },
    deletedSelect (keys, rows, current) {
      // 删除的请求
      let keysArr = keys.sort((a, b) => b - a)
      for (let index of keysArr) {
        DataJson.splice((this.current - 1) * this.pageSize + index, 1)
      }
      // 这里做刷新操作 - 获取数据
      this.current = current
      this.getData()
      this.$refs.lisTable.clearSelect()
      this.$message.success('删除成功')
    },
    paginationChange (current, pageSize) {
      this.current = current
      this.pageSize = pageSize
      this.getData()
    },
    refreshTable () {
      this.getData({ refresh: true })
    },
    details (scope) {
      this.$refs.lisDetails.open()
      this.detailedData = Object.assign({}, scope.text)
    },
    handleSearchForm (params) {
      this.current = 1
      this.tableParams = Object.assign({}, params)
      this.getData({ params })
    },
    resetSearchForm () {
      this.current = 1
      this.tableParams = Object.assign({}, {})
      this.getData()
      this.$message.success('重置成功')
    }
  }
}
</script>

<style scoped>
</style>
