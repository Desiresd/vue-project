<template>
  <div>
    <lis-upload-list :value="fileList"
                     @changed="changed" />
  </div>
</template>

<script>
import LisUploadList from '@/components/lisP/LisUploadList'
export default {
  name: 'LisUploadLists',
  components: {
    LisUploadList
  },
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    changed (data) {
      this.fileList = data
      console.log(this.fileList)
    }
  }
}
</script>

<style scoped>
</style>
