<template>
  <div>
    <a-table bordered
             class="table"
             size="middle"
             :rowKey="(r,i)=>{ return i }"
             :data-source="tableData"
             :columns="columns"
             :pagination="pagination"
             :loading="tableLoad"
             :scroll="scroll">
      <!-- lisInput -->
      <template slot="input"
                slot-scope="text,record,index,column">
        <lis-input v-if="record.editable"
                   v-model="record[column.dataIndex]"
                   placeholder="请输入" />
        <lis-ellipsis-tip v-else
                          :value="text"
                          :length="column.length || 10" />
      </template>
      <!-- LisDict -->
      <template slot="select"
                slot-scope="text,record,index,column">
        <lis-dict v-if="record.editable"
                  v-model="record[column.dataIndex]"
                  type="select"
                  dictCode="sex" />
        <lis-dict v-else
                  :value="text"
                  dictCode="sex" />
      </template>
      <!-- lisInputNumber -->
      <template slot="inputNumber"
                slot-scope="text,record,index,column">
        <lis-input-number v-if="record.editable"
                          v-model="record[column.dataIndex]"
                          :formatter="column.formatter ? value => formatter(value) : null" />
        <span v-else>{{ column.formatter ? formatter(text) : text }}</span>
      </template>
      <!-- LisTextArea -->
      <template slot="textArea"
                slot-scope="text,record,index,column">
        <lis-text-area v-if="record.editable"
                       v-model="record[column.dataIndex]"
                       style="z-index: 1;" />
        <lis-ellipsis-tip v-else
                          :value="text"
                          :length="column.length || 10" />
      </template>
      <!-- LisDate -->
      <template slot="date"
                slot-scope="text,record,index,column">
        <lis-date v-if="record.editable"
                  v-model="record[column.dataIndex]"
                  allowClear
                  style="width: 100%" />
        <span v-else>{{  text }}</span>
      </template>
      <!-- LisDate -->
      <template slot="dateArea"
                slot-scope="text,record,index,column">
        <lis-date-area v-if="record.editable"
                       v-model="record[column.dataIndex]"
                       :end.sync="record[column.dataIndexT]"
                       :startName="column.dataIndex"
                       :endName="column.dataIndexT"
                       allowClear
                       style="position: relative;top: 12px;" />
        <span v-else>{{ `${text} ~ ${record[column.dataIndexT]}`  }}</span>
      </template>
      <!-- dateYear -->
      <template slot="dateYear"
                slot-scope="text,record,index,column">
        <lis-date-year v-if="record.editable"
                       v-model="record[column.dataIndex]"
                       style="width: 100%" />
        <span v-else>{{  text }}</span>
      </template>
      <!-- Action -->
      <template slot="action"
                slot-scope="text,record,index">
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
  </div>
</template>

<script>
import LisEllipsisTip from '@/components/lis/LisEllipsisTip'
import LisDict from '@/components/lis/LisDict'
import LisInput from '@/components/lis/LisInput'
import LisInputNumber from '@/components/lis/LisInputNumber'
import LisTextArea from '@/components/lis/LisTextArea'
import LisDate from '@/components/lis/LisDate'
import LisDateArea from '@/components/lis/LisDateArea'
import LisDateYear from '@/components/lis/LisDateYear'
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
    // 滚动条配置
    scroll: Object
  },
  watch: {
    value: {
      handler (newName) {
        this.tableLoad = true
        this.tableData = JSON.parse(JSON.stringify(newName))
        this.tableLoad = false
      },
      immediate: true
    }
  },
  data () {
    return {
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
        },
        onChange: (current, size) => {
          this.pagination.current = current
          this.pagination.pageSize = size
        }
      },
      tableLoad: false,
      tableData: [],
      singleCopy: new Map()
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
      this.$emit('save', r, i)
    },
    handleSave (i) {
      this.tableLoad = true
      this.tableData[i]['editable'] = false
      this.tableLoad = false
    },
    cancel (r, i) {
      let singleData = this.singleCopy.get(i)
      this.singleCopy.delete(i)
      this.tableLoad = true
      this.tableData[i] = singleData
      this.tableData[i]['editable'] = false
      this.tableLoad = false
    },
    edit (i) {
      this.tableLoad = true
      this.tableData[i]['editable'] = true
      this.tableLoad = false
      this.singleCopy.set(i, JSON.parse(JSON.stringify(this.tableData[i])))
    },
    del (record) {
      this.$emit('deleted', record, this.pagination.current)
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
</style>
