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
      <drop-shape v-else-if="element === 'DropShape'"
                  :style="passStyle">水滴特效</drop-shape>
      <sticky-note v-else-if="element === 'StickyNote'"
                   :note="note" />
      <div v-else>空</div>
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
import StickyNote from '@/components/module/StickyNote'
import DropShape from '@/components/module/DropShape'
export default {
  name: 'index',
  components: {
    CircleCollect,
    CircleProgressbar,
    StickyNote,
    DropShape
  },
  data () {
    return {
      visible: false,
      element: '',
      note: [
        '一路上追逐奔波，',
        '最后想要的，',
        '只不过是宁静的幸福。',
        '张小娴'
      ],
      passStyle: {
        'position': 'relative',
        'width': '120px',
        'height': '120px',
        'right': '0',
        'bottom': '0',
        'background': '#c61dff',
        'box-shadow': 'inset 10px 10px 10px rgba(190, 1, 254, 0.05), 25px 35px 20px rgba(190, 1, 254, 0.1), 25px 30px 30px rgba(190, 1, 254, 0.1), inset -20px -20px 25px rgba(255, 255, 255, 0.5)',
        'border-radius': '32% 68% 56% 44% / 40% 36% 64% 60%'
      }
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
