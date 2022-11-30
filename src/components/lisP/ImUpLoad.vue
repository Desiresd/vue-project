<template>
  <div>
    <a-upload name='file'
              :multiple='true'
              :action='uploadAction'
              :headers='headers'
              :accept='accept'
              :header='header'
              :default-file-list='defaultFileList'
              :show-upload-list='false'
              @change='info=>handleChange(info)'>
      <a-button v-if='isAllow'
                type='primary'
                v-has='hasv'
                :disabled='!isVerify'>
        <a-icon type='upload' />
        {{ name }}
      </a-button>
    </a-upload>
    <slot name='btn'></slot>
    <slot name='message'></slot>
    <a-table bordered
             :rowKey='(record,index)=>{ return index }'
             :data-source='tableData'
             :columns='columnsC'
             :pagination='false'
             size='small'
             :scroll='{ x: 600 }'
             :loading='tableLoad'>
      <!-- 文件产生阶段 -->
      <a-form-item :label-col='labelCol'
                   :wrapper-col='wrapperCol'
                   :validate-status="record.rules?!!text?'success':'error':'success'"
                   :class="record.rules?!!text?'form-item-success':'form-item-error':'form-item-success'"
                   class='padding-left-right-sm'
                   :help="'请选择文件产生阶段'"
                   slot='projectStep'
                   slot-scope='text,record,index'>
        <j-dict-select-tag v-if='isAllow && record.editable'
                           :getPopupContainer='popupContainer'
                           :popContainer='popContainer'
                           v-model="record['projectStep']"
                           placeholder='请选择'
                           dictCode='projectStep'
                           style='width: 100%'
                           @change="value => contentChange(value, index,'projectStep')" />
        <dict-pop v-else
                  :value="record['projectStep']"
                  dictCode='projectStep' />
      </a-form-item>
      <!-- 文件类型 -->
      <a-form-item :label-col='labelCol'
                   :wrapper-col='wrapperCol'
                   :validate-status="record.rules?!!text?'success':'error':'success'"
                   :class="record.rules?!!text?'form-item-success':'form-item-error':'form-item-success'"
                   class='padding-left-right-sm'
                   :help="'请选择文件类型'"
                   slot='fileType'
                   slot-scope='text,record,index'>
        <j-dict-select-tag v-if='isAllow && record.editable'
                           v-model="record['fileType']"
                           placeholder='请选择'
                           :getPopupContainer='popupContainer'
                           :popContainer='popContainer'
                           :dictCode='fileType'
                           style='width: 100%'
                           @change="value => contentChange(value, index,'fileType')" />
        <dict-pop v-else
                  :value="record['fileType']"
                  :dictCode='fileType' />
      </a-form-item>
      <!-- 文件名称 -->
      <template slot='fileName'
                slot-scope='text,record,index'>
        <span class='file-content'>
          <span v-if='isAllow && record.editable'>
            <a-upload name='file'
                      :multiple='false'
                      :action='uploadAction'
                      :headers='headers'
                      :accept='accept'
                      :header='header'
                      :default-file-list='defaultFileList'
                      :show-upload-list='false'
                      @change='info=>fileChange(info,index)'>
              <a-tag size='small'
                     color='blue'>
                <a-icon type='upload'
                        class='code-box-code-copy' />
              </a-tag>
            </a-upload>
            <a-tooltip>
              <template slot='title'>
                <span>{{ text }}</span>
              </template>
              {{ text|ellipsis }}
            </a-tooltip>
          </span>
          <span v-else>
            <!-- <lis-file-view :record='record'></lis-file-view> -->
            <a-icon type="eye"
                    @click="filePreview(record.fileName,record.fileId)" />

            <a-icon type="vertical-align-bottom"
                    @click="fileDownload(record.fileName,record.fileId)" />
          </span>
        </span>
      </template>
      <!-- 文件描述 -->
      <a-form-item :label-col='labelCol'
                   :wrapper-col='wrapperCol'
                   :validate-status="'success'"
                   :class="'form-item-success'"
                   class='padding-left-right-sm'
                   :help="'请填写文件描述'"
                   slot='fileRemark'
                   slot-scope='text,record,index'>
        <textarea-pop v-if='isAllow && record.editable'
                      v-model="record['fileRemark']"
                      :width='300'
                      :height='210'
                      :placeholder="'文件描述'"
                      style='width: 100%;'
                      @change="value => contentChange(value, index,'fileRemark')" />
        <span v-else>
          <j-ellipsis :value='text'
                      :length='10' />
        </span>
      </a-form-item>
      <!-- 产出时间 -->
      <a-form-item :label-col='labelCol'
                   :wrapper-col='wrapperCol'
                   :validate-status="record.rules?!!text?'success':'success':'success'"
                   :class="record.rules?!!text?'form-item-success':'form-item-success':'form-item-success'"
                   class='padding-left-right-sm'
                   :help="'请选择产出时间'"
                   slot='fileCompleteTime'
                   slot-scope='text,record,index'>
        <time-pop v-if='isAllow && record.editable'
                  v-model="record['fileCompleteTime']"
                  style='width: 100%;'
                  placeholder='请选择'
                  @input="value => contentChange(value, index,'fileCompleteTime')" />
        <span v-else>{{ text }}</span>
      </a-form-item>
      <!-- 确认时间 -->
      <a-form-item :label-col='labelCol'
                   :wrapper-col='wrapperCol'
                   :validate-status="record.rules?!!text?'success':'success':'success'"
                   :class="record.rules?!!text?'form-item-success':'form-item-success':'form-item-success'"
                   class='padding-left-right-sm'
                   :help="'请选择确认时间'"
                   slot='fileReviewTime'
                   slot-scope='text,record,index'>
        <time-pop v-if='isAllow && record.editable'
                  v-model="record['fileReviewTime']"
                  style='width: 100%;'
                  placeholder='请选择'
                  @input="value => contentChange(value, index,'fileReviewTime')" />
        <span v-else>{{ text }}</span>
      </a-form-item>
      <!-- 操作 -->
      <template slot='action'
                slot-scope='text,record,index'>
        <div v-if='isAllow'>
          <span class='edit'
                v-show='!record.editable'
                @click='editRows(index)'>编辑</span>
          <a-popconfirm v-show='record.editable'
                        placement='topRight'
                        ok-text='确定'
                        cancel-text='取消'
                        @confirm='fileDel(record)'>
            <template slot='title'>
              <p>确定要去除吗?</p>
            </template>
            <a class='red'>去除</a>
          </a-popconfirm>
        </div>
      </template>
    </a-table>
  </div>
</template>

<script>
import Vue from 'vue'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { filePreview, fileDownload } from '@api/manage'
import dictPop from '@comp/miniPop/dictPop'
import textareaPop from '@comp/miniPop/textareaPop'
import timePop from '@comp/miniPop/timePop'
import LisFileView from '@comp/lis/LisFileView'

export default {
  components: {
    LisFileView,
    dictPop,
    textareaPop,
    timePop
  },
  props: {
    hasv: {
      type: String,
      default: 'file:upload'
    },
    value: { // 表格数据
      type: Array,
      default: () => {
        return []
      }
    },
    bizPath: { /* 这个属性用于控制文件上传的业务路径 */
      type: String,
      required: false,
      default: () => {
        return 'tempFile'
      }
    },
    accept: { // 接受上传文件格式
      type: String,
      default: () => {
        return '.doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf'
      }
    },
    fileType: {
      type: String,
      default: () => {
        return 'fileType'
      }
    },
    name: { // 上传按钮名称
      type: String,
      default: () => {
        return ''
      }
    },
    isAllow: { // 是否允许上传
      type: Boolean,
      default: () => {
        return true
      }
    },
    popupContainer: {
      type: Function,
      default: null
    },
    popContainer: {
      type: String,
      default: '.ant-table',
      required: false
    },
    columns: {
      type: Array,
      default: () => {
        return []
      }
    },
    isVerify: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    loading: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  watch: {
    value: {
      handler () {
        this.tableLoad = true
        this.tableData = this.value == null ? [] : this.value
        this.tableLoad = false
      },
      immediate: true,
      deep: true
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
      form: this.$form.createForm(this),
      labelCol: { span: 0 },
      wrapperCol: { span: 24 },
      headers: {},
      uploadAction: window._CONFIG['domianURL'] + '/sys/common/upload',
      header: {
        authorization: 'authorization-text'
      },
      defaultFileList: [],
      tableLoad: false,
      tableData: [],
      editColumn: [
        {
          title: '文件类型',
          dataIndex: 'fileType',
          width: '150px',
          align: 'center',
          type: 'dict',
          dictCode: '',
          required: true,
          scopedSlots: { customRender: 'fileType' }
        },
        {
          title: '文件名称',
          dataIndex: 'fileName',
          width: '280px',
          align: 'center',
          type: 'fileName',
          ellipsis: true,
          scopedSlots: { customRender: 'fileName' }
        },
        {
          title: '文件描述',
          dataIndex: 'fileRemark',
          // ellipsis:true,
          width: '200px',
          align: 'center',
          scopedSlots: { customRender: 'fileRemark' }
        },
        {
          title: '操作',
          width: '100px',
          align: 'center',
          scopedSlots: { customRender: 'action' }
        }
      ],
      showColumn: [
        {
          title: '文件类型',
          dataIndex: 'fileType',
          width: '150px',
          align: 'center',
          scopedSlots: { customRender: 'fileType' }
        },
        {
          title: '文件名称',
          dataIndex: 'fileName',
          width: '280px',
          align: 'center',
          scopedSlots: { customRender: 'fileName' }
        },
        {
          title: '文件描述',
          dataIndex: 'fileRemark',
          // ellipsis:true,
          width: '200px',
          align: 'center',
          scopedSlots: { customRender: 'fileRemark' }
        }
      ]
    }
  },
  created () {
    this.tableLoad = true
    this.tableData = this.value == null ? [] : this.value
    const token = Vue.ls.get(ACCESS_TOKEN)
    this.headers = { 'X-Access-Token': token }
    this.tableLoad = false
  },
  computed: {
    columnsC () {
      if (this.columns && this.columns.length) return this.columns
      return this.isAllow ? this.editColumn : this.showColumn
    }
  },
  methods: {
    filePreview,
    fileDownload,
    editRows (index) {
      this.tableLoad = true
      this.tableData[index]['editable'] = true
      this.tableLoad = false
    },
    handleChange (info) {
      this.tableLoad = true
      if (info.file.status === 'done') {
        if (info.file.response && info.file.response.code == 0) {
          let params = {}
          const originParams = (this.columnsC.map(item => {
            return {
              name: item.dataIndex
            }
          })).filter(item => !!item.name)
          originParams.forEach(item => {
            params[item.name] = ''
          })
          params['id'] = ''
          params['fileId'] = info.file.response.result.fileId
          params['fileName'] = info.file.response.result.fileName
          params['editable'] = true
          this.tableData.push(params)
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
        this.tableData[index]['fileId'] = info.file.response.result.fileId
        this.tableData[index]['fileName'] = info.file.response.result.fileName
        this.exportData()
        this.$message.success(`${info.file.name} 文件上传成功`)
        this.tableLoad = false
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} 文件上传失败`)
        this.tableLoad = false
      }
    },
    fileDel (record) {
      this.tableData = this.tableData.filter(item => item.fileId !== record.fileId)
      this.exportData()
    },
    contentChange (value, index, name) {
      // this.tableData[index]['rules'] = true
      this.tableData[index][name] = value
      this.exportData()
    },
    exportData () {
      this.$emit('changed', { data: this.tableData, isValidate: this.valideteRules(this.tableData) })
    },
    valideteRules (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].hasOwnProperty('fileType') && !!data[i].fileType === false) return false
        // if (!!data[i].fileType === false || (data[i].fileType === '99' && !!data[i].fileRemark === false)) return false
      }
      return true
    }
  }
}
</script>
<style scoped>
.padding-sm {
  padding: 5px 0;
}

.file-content {
  display: flex !important;
  justify-content: left;
  align-items: center;
  padding: 5px;
}

.red {
  color: red;
}

.edit {
  cursor: pointer;
  color: #1890ff;
}

::v-deep .ant-form-item {
  margin-bottom: 0px;
}

.form-item-error {
  position: relative;
}

.form-item-success ::v-deep .ant-form-explain {
  display: none;
}

.form-item-error ::v-deep .ant-form-explain {
  position: absolute;
  width: 130px;
  height: 30px;
  left: 50%;
  top: -80%;
  transform: translate(-50%, -20%);
  color: #fff;
  background: #f5222d;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 2px;
}

.padding-left-right-sm {
  padding: 0 5px;
}

::v-deep .ant-btn-primary[disabled] {
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
}

::v-deep .code-box-code-copy {
  text-align: center;
  cursor: pointer;
  transition: transform 0.24s;
}

::v-deep .code-box-code-copy:hover {
  color: #00a0e9;
  transform: scale(1.3);
}
</style>
