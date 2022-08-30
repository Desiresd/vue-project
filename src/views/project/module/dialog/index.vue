<template>
  <el-dialog :title="element"
             :visible.sync="visible"
             width="600px">
    <div class="content">
      <circle-collect v-if="element === 'CircleCollect'"
                      class="circle"
                      :id="1"
                      :width="60"
                      :radius="6"
                      :progress="57.83"
                      barColor="#61A28B"
                      backgroundColor="#152528"
                      :title="'AQI'"
                      :value="57.83" />
      <circle-progressbar v-else-if="element === 'CircleProgressbar'" />

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
import CircleCollect from '@/components/module/CircleCollect'
import CircleProgressbar from '@/components/module/CircleProgressbar'
export default {
  name: 'index',
  components: {
    CircleCollect,
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
  .circle {
    width: 200px;
    height: 100px;
    background: #000;
  }
}
</style>
