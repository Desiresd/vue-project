<template>
  <span>
    <a-tag size='small'
           color="blue"
           style='margin-right: 1px'>
      <a-icon type='download'
              class='code-box-code-copy'
              @click='fileDownload(record.fileName,record.fileId)' />&nbsp;
      <a-icon type='eye'
              @click='filePreview(record.fileName,record.fileId)'
              class='code-box-code-copy' />
    </a-tag>
    <lis-ellipsis-tip v-show="showName"
                      :value="record.fileName"
                      :length="15" />
  </span>
</template>

<script>
import LisEllipsisTip from '@/components/lisP/LisEllipsisTip'
import { filePreview, fileDownload } from '@/api/manage.js'
export default {
  name: 'LisFileView',
  components: {
    LisEllipsisTip
  },
  props: {
    record: {
      type: Object,
      require: true
    },
    showName: {
      type: Boolean,
      default: () => { return true }
    }
  },
  methods: {
    filePreview, fileDownload
  }
}
</script>

<style scoped>
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
