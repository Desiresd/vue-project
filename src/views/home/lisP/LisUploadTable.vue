<template>
  <div>
    <lis-upload-table ref="lisUploadTable"
                      :value="tableData"
                      :columns="columns"
                      :rules="rules"
                      @changed="changed"
                      @save="save"
                      @del="del">
      <template #btn>
        <a-button type="primary"
                  @click="saveTable">保存</a-button>
      </template>
      <template #slotAction={item}>
        <a-form-model-item v-if="item.record.editable"
                           :prop="'tableData.'+ item.index + '.' + item.column.dataIndex"
                           :rules='rules[item.column.dataIndex]'
                           class="location">
          <lis-input v-model="item.record[item.column.dataIndex]"
                     :placeholder="item.column.placeholder || '请输入'" />
        </a-form-model-item>
        <lis-ellipsis-tip v-else
                          :value="item.text"
                          :length="item.column.length || 10" />
      </template>
    </lis-upload-table>
  </div>
</template>

<script>
import LisEllipsisTip from '@/components/lisP/LisEllipsisTip'
import LisInput from '@/components/lisP/LisInput'
import LisUploadTable from '@/components/lisP/LisUploadTable'
export default {
  name: 'LisUploadTables',
  components: {
    LisEllipsisTip,
    LisInput,
    LisUploadTable
  },
  data () {
    return {
      tableData: [
        {
          fileName: '我的文件',
          fileType: '2',
          fileRemark: '我的描述',
          slotAction: '1111'
        }
      ],
      columns: [],
      rules: []
    }
  },
  created () {
    this.columns = [
      {
        title: '文件类型',
        dataIndex: 'fileType',
        dictCode: 'fileType',
        width: '200px',
        align: 'center',
        placeholder: '请选择文件类型',
        scopedSlots: { customRender: 'select' }
      },
      {
        title: '文件名称',
        name: 'fileName',
        dataIndex: 'fileName',
        width: '200px',
        align: 'left',
        placeholder: '请输入文件名称',
        scopedSlots: { customRender: 'fileChange' }
      },
      {
        title: '文件描述',
        dataIndex: 'fileRemark',
        width: '200px',
        align: 'center',
        placeholder: '请输入文件描述',
        scopedSlots: { customRender: 'textArea' }
      },
      {
        title: '插槽',
        dataIndex: 'slotAction',
        width: '200px',
        align: 'center',
        placeholder: '请输入文件描述',
        scopedSlots: { customRender: 'slotAction' }
      },
      {
        title: '操作',
        width: '150px',
        align: 'center',
        scopedSlots: { customRender: 'action' }
      }
    ]
    this.rules = {
      fileName: [{
        required: true,
        trigger: 'change',
        message: '请输入文件名称'
      }],
      fileType: [{
        required: true,
        trigger: 'change',
        message: '请选择文件类型'
      }],
      fileRemark: [{
        required: true,
        trigger: 'change',
        message: '请输入文件描述'
      }],
      slotAction: [{
        required: true,
        trigger: 'change',
        message: '请输入'
      }]
    }
  },
  methods: {
    saveTable () {
      this.$refs.lisUploadTable.save()
    },
    changed (data) {
      this.tableData = data
    },
    save (data) {
      this.$message.success('校验通过')
      console.log('校验通过')
      console.log(data)
      this.tableData = data.map(item => {
        return {
          ...item,
          editable: false
        }
      })
    },
    del (r, i) {
      this.tableData.splice(i, 1)
      this.$message.success('去除成功')
    }
  }
}
</script>

<style scoped>
</style>
