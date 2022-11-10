<template>
  <div>
    <a-form-model ref="tableformRef"
                  :model="form">
      <div class="btn-class">
        <a-button v-if="hasAdd"
                  type="primary"
                  @click="addList">新增</a-button>
        <a-popconfirm v-if="hasDel"
                      placement="rightTop"
                      ok-text="是"
                      cancel-text="否"
                      @confirm="delList">
          <template #title>
            <p>确认删除选中列数据？</p>
          </template>
          <a-button type="danger">删除</a-button>
        </a-popconfirm>

      </div>
      <a-table bordered
               class="table"
               size="middle"
               ref="tableRef"
               :rowKey="(r,i)=>{ return i }"
               :rowSelection="{ 'selectedRowKeys': selectedRowKeys, 'onChange': onSelectChange, 'columnTitle':' ' }"
               :data-source="form.tableData"
               :columns="columns"
               :pagination="pagination"
               :loading="tableLoad"
               :scroll="scroll">
        <!-- lisInput -->
        <template slot="input"
                  slot-scope="text,record,index,column">
          <a-form-model-item v-if="record.editable"
                             :prop="'tableData.'+ index + '.' + column.dataIndex"
                             :rules='rules[column.dataIndex]'
                             class="location">
            <lis-input v-model="record[column.dataIndex]"
                       :placeholder="column.placeholder || '请输入'" />
          </a-form-model-item>
          <lis-ellipsis-tip v-else
                            :value="text"
                            :length="column.length || 10" />
        </template>
        <!-- LisDict -->
        <template slot="select"
                  slot-scope="text,record,index,column">
          <a-form-model-item v-if="record.editable"
                             :prop="'tableData.'+ index + '.' + column.dataIndex"
                             :rules='rules[column.dataIndex]'
                             class="location">
            <lis-dict v-model="record[column.dataIndex]"
                      type="select"
                      :placeholder="column.placeholder || '请选择'"
                      :dictCode="column['dictCode']" />
          </a-form-model-item>
          <lis-dict v-else
                    :value="text"
                    :dictCode="column['dictCode']" />
        </template>
        <!-- lisInputNumber -->
        <template slot="inputNumber"
                  slot-scope="text,record,index,column">
          <a-form-model-item v-if="record.editable"
                             :prop="'tableData.'+ index + '.' + column.dataIndex"
                             :rules='rules[column.dataIndex]'
                             class="location">
            <lis-input-number v-model="record[column.dataIndex]"
                              :formatter="column.formatter ? value => formatter(value) : null" />
          </a-form-model-item>
          <span v-else>{{ column.formatter ? formatter(text) : text }}</span>
        </template>
        <!-- LisTextArea -->
        <template slot="textArea"
                  slot-scope="text,record,index,column">
          <a-form-model-item v-if="record.editable"
                             :prop="'tableData.'+ index + '.' + column.dataIndex"
                             :rules='rules[column.dataIndex]'
                             class="location">
            <lis-text-area v-model="record[column.dataIndex]"
                           :placeholder="column.placeholder || '请输入'"
                           style="z-index: 1;" />
          </a-form-model-item>
          <lis-ellipsis-tip v-else
                            :value="text"
                            :length="column.length || 10" />
        </template>
        <!-- LisDate -->
        <template slot="date"
                  slot-scope="text,record,index,column">
          <a-form-model-item v-if="record.editable"
                             :prop="'tableData.'+ index + '.' + column.dataIndex"
                             :rules='rules[column.dataIndex]'
                             class="location">
            <lis-date v-model="record[column.dataIndex]"
                      allowClear
                      style="width: 100%" />
          </a-form-model-item>
          <span v-else>{{  text }}</span>
        </template>
        <!-- LisDateArea -->
        <template slot="dateArea"
                  slot-scope="text,record,index,column">
          <lis-date-area v-if="record.editable"
                         v-model="record[column.dataIndex]"
                         :end.sync="record[column.dataIndexT]"
                         :startName="'tableData.'+ index + '.' + column.dataIndex"
                         :endName="'tableData.'+ index + '.' + column.dataIndexT"
                         :rules="rules[column.dataIndex]"
                         allowClear
                         class="location"
                         style="z-index: 1;" />
          <span v-else>{{ `${text} ~ ${record[column.dataIndexT]}`  }}</span>
        </template>
        <!-- dateYear -->
        <template slot="dateYear"
                  slot-scope="text,record,index,column">
          <a-form-model-item v-if="record.editable"
                             :prop="'tableData.'+ index + '.' + column.dataIndex"
                             :rules='rules[column.dataIndex]'
                             class="location">
            <lis-date-year v-model="record[column.dataIndex]"
                           style="width: 100%" />
          </a-form-model-item>
          <span v-else>{{  text }}</span>
        </template>
        <!-- Action -->
        <template slot="action"
                  slot-scope="text,record,index">
          <a-form-model-item v-if="record.editable"
                             class="location">
            <div v-if="record.editable">
              <a @click="save(record,index)">保存</a>
              <a-divider type="vertical" />
              <a-popconfirm placement="topRight"
                            ok-text="确定"
                            cancel-text="取消"
                            @confirm="cancel(record,index)">
                <template slot="title">
                  <p>确定取消保存吗?</p>
                </template>
                <a class="red">取消</a>
              </a-popconfirm>
            </div>
          </a-form-model-item>
          <div v-else>
            <a @click="edit(index)">编辑</a>
            <a-divider type="vertical" />
            <a-popconfirm placement="topRight"
                          ok-text="确定"
                          cancel-text="取消"
                          @confirm="del(record,index)">
              <template slot="title">
                <p>确定要删除吗?</p>
              </template>
              <a class="red">删除</a>
            </a-popconfirm>
          </div>
        </template>
      </a-table>
    </a-form-model>
  </div>
</template>

<script>
import LisEllipsisTip from '@/components/lisP/LisEllipsisTip'
import LisDict from '@/components/lisP/LisDict'
import LisInput from '@/components/lisP/LisInput'
import LisInputNumber from '@/components/lisP/LisInputNumber'
import LisTextArea from '@/components/lisP/LisTextArea'
import LisDate from '@/components/lisP/LisDate'
import LisDateArea from '@/components/lisP/LisDateAreaTable'
import LisDateYear from '@/components/lisP/LisDateYear'
// 引入策略类
import { LisTable } from './logic/strategy.js'
export default {
  name: 'LisTable',
  components: {
    LisEllipsisTip,
    LisDict,
    LisInput,
    LisInputNumber,
    LisTextArea,
    LisDate,
    LisDateArea,
    LisDateYear
  },
  props: {
    // 分页配置
    current: Number,
    pageSize: Number,
    total: Number,
    size: String,
    showSizeChanger: Boolean,
    showQuickJumper: Boolean,
    // 值属性配置
    value: Array,
    columns: Array,
    rules: Object,
    hasAdd: Boolean,
    hasDel: Boolean,
    // 滚动条配置
    scroll: Object,
    loading: Boolean,
    // 表格首页添加 / 尾页添加 （默认首页）push / unshift
    addLocation: { type: String, default: 'unshift' }
  },
  watch: {
    value: {
      handler (newName) {
        this.tableLoad = true
        this.pagination.current = this.current
        this.pagination.pageSize = this.pageSize
        this.pagination.total = this.total
        this.form.tableData = newName.map(item => {
          return {
            ...item,
            editable: false
          }
        })
        this.tableLoad = false
      },
      immediate: true
    },
    loading: {
      handler (newName) {
        this.tableLoad = newName
      },
      immediate: true
    }
  },
  data () {
    return {
      labelCol: { span: 0 },
      wrapperCol: { span: 24 },
      pagination: {
        current: 1, // 默认当前页数
        pageSize: 5, // 默认当前页显示数据的大小
        total: 0, // 总数，必须先有
        pages: 0,
        size: 'small',
        showSizeChanger: true,
        showQuickJumper: true,
        pageSizeOptions: ['5', '10', '15', '20'],
        showTotal: (total) => `共 ${total} 条`, // 显示总数
        onShowSizeChange: (current, pageSize) => {
          this.pagination.current = 1
          this.pagination.pageSize = pageSize
          this.$emit('paginationChange', this.pagination.current, this.pagination.pageSize)
          this.singleCopy.clear()
        },
        onChange: (current, size) => {
          this.pagination.current = current
          this.pagination.pageSize = size
          this.$emit('paginationChange', this.pagination.current, this.pagination.pageSize)
          this.singleCopy.clear()
        }
      },
      selectedRowKeys: [],
      selectedRows: [],
      form: {
        tableData: []
      },
      tableData: [],
      singleCopy: new Map(), // 单条数据缓存 - 撤销需要
      addCopy: new Map() // 空数据缓存
    }
  },
  created () {
    ({
      current: this.pagination.current,
      pageSize: this.pagination.pageSize,
      total: this.pagination.total,
      size: this.pagination.size,
      showSizeChanger: this.pagination.showSizeChanger,
      showQuickJumper: this.pagination.showQuickJumper
    } = {
      current: this.current || 1,
      pageSize: this.pageSize || 5,
      total: this.total || 0,
      size: this.size || 'small',
      showSizeChanger: this.showSizeChanger || false,
      showQuickJumper: this.showQuickJumper || false
    })
  },
  methods: {
    formatter (text) {
      return `${text}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    save (r, i) {
      // valid在全部validator通过才会返回true，否则为false
      this.$refs.tableformRef.validate((valid) => {
        if (!valid) {
          this.$message.warning('请修改正确的数据格式！')
        } else {
          // 验证通过调用保存接口
          this.$emit('save', r, i)
        }
      })
    },
    handleSave (i) {
      this.tableLoad = true
      this.form.tableData[i]['editable'] = false
      this.tableLoad = false
    },
    cancel (r, i) {
      this.tableLoad = true
      if (this.singleCopy.has(i)) {
        let singleData = this.singleCopy.get(i)
        this.singleCopy.delete(i)
        Object.keys(singleData).map((key) => {
          this.form.tableData[i][key] = singleData[key]
        })
        this.form.tableData[i]['editable'] = false
      } else {
        this.selectedRowKeys = this.selectedRowKeys.filter(item => item !== i)
        this.form.tableData.splice(i, i + 1)
        this.pagination.total -= 1
      }
      this.$message.success('数据已撤销')
      this.tableLoad = false
    },
    edit (i, state = 'edit') {
      if (this.judgePageHasEdit(this.form.tableData)) {
        this.$message.warning('请保存本页数据再编辑数据！')
        return
      }
      this.tableLoad = true
      this.form.tableData[i]['editable'] = true
      this.form.tableData[i]['state'] = state
      this.tableLoad = false
      this.singleCopy.set(i, JSON.parse(JSON.stringify(this.form.tableData[i])))
    },
    del (r, i) {
      let current = ((this.form.tableData.length - 1) % this.pagination.pageSize) === 0 ? this.pagination.current - 1 : this.pagination.current
      this.$emit('deleted', r, i, current)
    },
    delList () {
      if (this.judgePageHasEdit(this.form.tableData)) {
        this.$message.warning('请保存本页数据再删除！')
        return
      }
      if (this.selectedRowKeys.length === 0) {
        this.$message.warning('请选择删除列！')
        return
      }
      let current = ((this.form.tableData.length - this.selectedRowKeys.length) % this.pagination.pageSize) === 0 ? (this.pagination.current - 1) > 0 ? this.pagination.current - 1 : 1 : this.pagination.current
      this.$emit('deletedSelect', this.selectedRowKeys, this.selectedRows, current)
    },
    addParams () {
      let add = {
        'editable': true,
        'state': 'add'
      }
      let keys = Object.keys(LisTable)
      for (let item of this.columns) {
        if (keys.includes(item.scopedSlots.customRender)) {
          add[item.dataIndex] = LisTable[item.scopedSlots.customRender]
        }
      }
      this.addCopy.set('empty', add)
      return this.addCopy.get('empty')
    },
    async addList () {
      this.clearSelect()
      let add = JSON.parse(JSON.stringify(this.addCopy.has('empty') ? this.addCopy.get('empty') : this.addParams()))
      this.tableLoad = true
      if (this.addLocation === 'push') {
        let current = Math.ceil(this.pagination.total / this.pagination.pageSize)
        if (current > this.pagination.current) {
          this.singleCopy.clear()
          this.pagination.current = current
          await this.$emit('paginationChange', this.pagination.current, this.pagination.pageSize)
        }
      } else if (this.addLocation === 'unshift') {
        let current = 1
        if (current < this.pagination.current) {
          this.singleCopy.clear()
          this.pagination.current = current
          await this.$emit('paginationChange', this.pagination.current, this.pagination.pageSize)
        }
      }
      if (this.judgePageHasEdit(this.form.tableData)) {
        this.$message.warning('请保存本页数据再新增数据！')
        return
      }
      this.pagination.total += 1
      this.form.tableData[this.addLocation](add)
      this.tableLoad = false
    },
    judgePageHasEdit (arr) {
      let index = arr.findIndex(item => item.editable === true)
      return index !== -1
    },
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    clearSelect () {
      this.selectedRowKeys = []
      this.selectedRows = []
    }
  }
}
</script>

<style scoped>
.table {
  position: relative;
  padding: 10px;
}

.red {
  color: red;
}

.location {
  position: relative;
  top: 12px;
}

.btn-class {
  padding: 0 10px;
}

.btn-class .ant-btn:not(:first-child) {
  margin-left: 5px;
}
</style>
