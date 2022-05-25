<template>
  <div>
    <a-table bordered
             class="table"
             size="middle"
             :rowKey="(record,index)=>{ return index }"
             :data-source="tableData"
             :columns="columns"
             :pagination="false"
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
                       v-model="record[column.dataIndex]" />
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
                       allowClear />
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
    value: Array,
    columns: Array,
    scroll: Object
  },
  watch: {
    value: {
      handler (newName) {
        console.log(newName)
        this.tableData = JSON.parse(JSON.stringify(newName))
      },
      immediate: true
    }
  },
  data () {
    return {
      tableLoad: false,
      tableData: []
    }
  },
  methods: {
    formatter (text) {
      return `${text}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    save () { },
    cancel () { },
    edit (index) {
      this.tableLoad = true
      this.tableData[index]['editable'] = true
      this.tableLoad = false
      console.log(this.tableData)
    },
    del () { }
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
