<template>
  <div>
    <a-upload name='file'
              :multiple='true'
              :action='uploadAction'
              :headers='headers'
              :accept='accept'
              :default-file-list='defaultFileList'
              :show-upload-list='true'
              :beforeUpload="beforeUpload"
              @change='info=>handleChange(info)'>
      <a-button type='primary'>
        <a-icon type='upload' />
        {{ name }}
      </a-button>
    </a-upload>
  </div>
</template>

<script>
export default {
  name: 'LisUploadList',
  props: {
    name: { type: String, default: () => { return '上传' } },
    accept: { type: String, default: () => { return '.doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf' } }
  },
  watch: {
    value: {
      handler (newName = []) {
        this.tableLoad = true
        this.fileList = newName.map(item => {
          return {
            ...item
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
      fileList: []
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
          let params = {}
          // 新增所需数据在此添加（以下是测试）
          params['id'] = ''
          params['fileId'] = info.file.response.fileId || null
          params['uid'] = info.file.uid
          params['fileName'] = info.file.name
          this.fileList.push(params)
          this.exportData()
          this.$message.success(`${info.file.name} 文件上传成功`)
          this.tableLoad = false
        } else {
          this.$message.error(`${info.file.name} 文件上传失败`)
          this.tableLoad = false
        }
      } else if (info.file.status === 'removed') {
        this.fileList = this.fileList.filter(item => item.uid !== info.file.uid)
        this.exportData()
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} 文件上传失败`)
        this.tableLoad = false
      }
    },
    exportData () {
      this.$emit('changed', this.fileList)
    }
  }
}
</script>

<style scoped>
</style>
