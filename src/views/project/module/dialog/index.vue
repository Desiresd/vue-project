<template>
  <el-dialog :title="element"
             :visible.sync="visible"
             width="600px">
    <div class="content">
      <circle-progressbar />
    </div>
    <span slot="footer"
          class="dialog-footer">
      <el-button size="small"
                 type="primary"
                 @click="visible = false">关闭</el-button>
    </span>
  </el-dialog>
</template>

<script>
import CircleProgressbar from '@/components/module/circleProgressbar'
export default {
  name: 'index',
  components: {
    CircleProgressbar
  },
  data () {
    return {
      visible: false,
      element: ''
    }
  }
}
</script>

<style lang='scss' scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
