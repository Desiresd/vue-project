<template>
  <div>
    <a-upload name='file'
              :multiple='true'
              :action='uploadAction'
              :headers='headers'
              :accept='accept'
              :default-file-list='defaultFileList'
              :show-upload-list='false'
              :beforeUpload="beforeUpload"
              @change='info=>handleChange(info)'>
      <a-button type='primary'>
        <a-icon type='upload' />
        {{ name }}
      </a-button>
    </a-upload>
    <slot name="btn"></slot>
    <a-form-model ref="tableformRef"
                  :model="form">
      <a-table bordered
               :style="{'margin-top': '8px'}"
               :rowKey='(r,i)=>{ return i }'
               :data-source='form.tableData'
               :columns='columns'
               :pagination='false'
               size='small'
               :scroll='{ x: 600 }'
               :loading='tableLoad'>
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
        <!-- fileChange -->
        <template slot="fileChange"
                  slot-scope="text,record,index">
          <span class='file-content'>
            <span v-if='record.editable'>
              <a-upload name='file'
                        :multiple='false'
                        :action='uploadAction'
                        :headers='headers'
                        :accept='accept'
                        :show-upload-list='false'
                        @change='info=>fileChange(info,index)'>
                <a-tag size='small'
                       color='blue'>
                  <a-icon type='upload'
                          class='code-box-code-copy' />
                </a-tag>
              </a-upload>
              <lis-ellipsis-tip :value="text"
                                :length="10" />
            </span>
            <span v-else>
              <lis-file-view :record='record'></lis-file-view>
            </span>
          </span>
        </template>
        <!-- Action -->
        <template slot="action"
                  slot-scope="text,record,index">
          <a v-show='!record.editable'
             @click="edit(index)">编辑</a>
          <a-divider v-show='!record.editable'
                     type="vertical" />
          <a-popconfirm placement="topRight"
                        ok-text="确定"
                        cancel-text="取消"
                        @confirm="del(record,index)">
            <template slot="title">
              <p>确定要去除吗?</p>
            </template>
            <a class="red">去除</a>
          </a-popconfirm>
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
import LisFileView from '@/components/lisP/LisFileView'
// 引入策略类
import { LisTable } from './logic/strategy.js'
export default {
  name: 'LisUploadTable',
  components: {
    LisEllipsisTip,
    LisDict,
    LisInput,
    LisInputNumber,
    LisTextArea,
    LisDate,
    LisDateArea,
    LisDateYear,
    LisFileView
  },
  props: {
    name: { type: String, default: () => { return '上传' } },
    accept: { type: String, default: () => { return '.doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf' } },
    value: Array,
    columns: Array,
    rules: Object
  },
  watch: {
    value: {
      handler (newName) {
        this.tableLoad = true
        this.form.tableData = newName.map(item => {
          return {
            ...item,
            editable: item.editable || false
          }
        })
        this.tableLoad = false
      },
      immediate: true
    }
  },
  data () {
    return {
      // 上传配置
      defaultFileList: [],
      uploadAction: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: { authorization: 'authorization-text' },
      // 表格配置
      tableLoad: false,
      form: {
        tableData: []
      },
      // 空数据缓存
      addCopy: new Map()
    }
  },
  methods: {
    beforeUpload () {
      console.log('上传前期类型检测')
    },
    handleChange (info) {
      this.tableLoad = true
      if (info.file.status === 'done') {
        if (info.file.response) {
          let params = JSON.parse(JSON.stringify(this.addCopy.has('empty') ? this.addCopy.get('empty') : this.addParams()))
          // 新增所需数据在此添加（以下是测试）
          params['id'] = ''
          params['fileId'] = info.file.response.fileId || null
          params['fileName'] = info.file.name
          params['editable'] = true
          this.form.tableData.push(params)
          this.exportData()
          this.$message.success(`${info.file.name} 文件上传成功`)
          this.tableLoad = false
        } else {
          this.$message.error(`${info.file.name} 文件上传失败`)
          this.tableLoad = false
        }
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} 文件上传失败`)
        this.tableLoad = false
      }
    },
    fileChange (info, index) {
      this.tableLoad = true
      if (info.file.status === 'done') {
        this.form.tableData[index]['fileId'] = info.file.response.fileId || null
        this.form.tableData[index]['fileName'] = info.file.name
        this.exportData()
        this.$message.success(`${info.file.name} 文件上传成功`)
        this.tableLoad = false
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} 文件上传失败`)
        this.tableLoad = false
      }
    },
    save () {
      // valid在全部validator通过才会返回true，否则为false
      this.$refs.tableformRef.validate((valid) => {
        if (!valid) {
          this.$message.warning('请修改正确的数据格式！')
        } else {
          // 验证通过调用保存接口
          this.$emit('save', this.form.tableData)
        }
      })
    },
    addParams () {
      let add = {
        'editable': true
      }
      let keys = Object.keys(LisTable)
      for (let item of this.columns) {
        if (item.scopedSlots && item.scopedSlots.customRender && keys.includes(item.scopedSlots.customRender)) {
          add[item.dataIndex] = LisTable[item.scopedSlots.customRender]
        }
      }
      this.addCopy.set('empty', add)
      return this.addCopy.get('empty')
    },
    edit (index) {
      this.tableLoad = true
      this.form.tableData[index]['editable'] = true
      this.tableLoad = false
    },
    del (r, i) {
      this.$emit('del', r, i)
    },
    exportData () {
      this.$emit('changed', this.form.tableData)
    }
  }
}
</script>

<style scoped>
.red {
  color: red;
}
/deep/ .location.ant-row.ant-form-item {
  margin-bottom: 0px;
}
.has-error {
  position: relative;
}
/deep/ .ant-form-explain {
  position: absolute;
  width: 130px;
  height: 30px;
  padding: 5px 10px;
  left: 50%;
  top: -80%;
  transform: translate(-50%, -20%);
  color: #fff;
  background: #f5222d;
  font-size: 12px;
  border-radius: 2px;
  z-index: 2;
}
</style>
