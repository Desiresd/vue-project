<template>
  <div v-show="editorView"
       class="editor">
    <header class="head">
      <span>{{ editorName }}</span>
      <a-icon class="icon"
              type="close"
              @click="close" />
    </header>
    <div class="model">
      <a-form-model :model="form"
                    :label-col="labelCol"
                    :wrapper-col="wrapperCol">
        <a-form-model-item label="名称">
          <a-input v-model="form.name" />
        </a-form-model-item>
        <a-form-model-item label="备注">
          <a-input v-model="form.desc"
                   type="textarea" />
        </a-form-model-item>
        <a-form-model-item label="符号颜色"
                           :label-col="labelCol2"
                           :wrapper-col="wrapperCol2">
          <color-picker v-model="form.color" />
        </a-form-model-item>
        <a-form-model-item v-show="editorType === 'mark'"
                           label="符号大小"
                           :label-col="labelCol2"
                           :wrapper-col="wrapperCol2">
          <a-input-number v-model="form.size" />
        </a-form-model-item>
        <a-form-model-item v-show="editorType === 'mark'"
                           label="显示名称"
                           :label-col="labelCol2"
                           :wrapper-col="wrapperCol2">
          <a-switch v-model="form.delivery" />
        </a-form-model-item>
        <a-form-model-item v-show="editorType === 'side'"
                           label="透明度"
                           :label-col="{ span: 5 }"
                           :wrapper-col="{ span: 17 }">
          <lis-slider :min="0"
                      :max="1"
                      :step="0.1"
                      v-model="form.fillOpacity" />
        </a-form-model-item>
        <a-form-model-item v-show="editorType === 'wire'"
                           label="线宽"
                           :label-col="labelCol"
                           :wrapper-col="wrapperCol">
          <lis-slider :min="1"
                      :max="20"
                      v-model="form.weight" />
        </a-form-model-item>
        <a-form-model-item v-show="editorType === 'side'"
                           label="轮廓宽"
                           :label-col="{ span: 5 }"
                           :wrapper-col="{ span: 17 }">
          <lis-slider :min="1"
                      :max="20"
                      v-model="form.weight" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 7 }">
          <a-button type="primary"
                    @click="onSubmit">
            确定
          </a-button>
          <a-button type="danger"
                    style="margin-left: 20px;"
                    @click="onDelete">
            删除
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
import ColorPicker from '@/components/common/ColorPicker'
import LisSlider from '@/components/lisP/LisSlider'
export default {
  name: 'Editor',
  components: {
    ColorPicker,
    LisSlider
  },
  props: {
    value: Object
  },
  watch: {
    value () {
      let mark = {
        type: 'mark',
        name: '标注',
        desc: '',
        color: '#FF0000',
        size: 32,
        delivery: false
      }
      let wire = {
        type: 'wire',
        name: '线条',
        desc: '',
        color: '#FF0000',
        weight: 3
      }
      let side = {
        type: 'side',
        name: '线面',
        desc: '',
        color: '#FF0000',
        fillOpacity: 0.2,
        weight: 3
      }
      let circle = {
        type: 'side',
        name: '圆形',
        desc: '',
        color: '#FF0000',
        fillOpacity: 0.2,
        weight: 3
      }
      let params = this.value.options
      let options = {}
      this.editorType = params.type
      this.form = this.editorType === 'mark' ? this.jsonForm(mark) : this.editorType === 'wire' ? this.jsonForm(wire) : this.editorType === 'circle' ? this.jsonForm(circle) : this.jsonForm(side)
      switch (params.type) {
        case 'mark':
          options = params.icon.options
          Object.keys(options).forEach(key => {
            if (this.form.hasOwnProperty(key)) {
              this.form[key] = options[key]
            }
          })
          break
        case 'wire':
        case 'side':
          options = params
          Object.keys(options).forEach(key => {
            if (this.form.hasOwnProperty(key)) {
              this.form[key] = options[key]
            }
          })
          break
        default:
          break
      }
    }
  },
  data () {
    return {
      editorType: 'mark',
      editorView: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
      labelCol2: { span: 6 },
      wrapperCol2: { span: 16 },
      form: {}
    }
  },
  computed: {
    editorName () {
      let type = this.editorType
      return type === 'mark' ? '标注' : type === 'wire' ? '线条' : type === 'side' ? '标面' : type === 'circle' ? '画圆' : type === 'areas' ? '矩形' : type === '测距' ? 'ruler' : type === 'area' ? '测面' : ''
    },
    jsonForm () {
      return function (params) {
        return JSON.parse(JSON.stringify(params))
      }
    }
  },
  methods: {
    onSubmit () {
      this.$emit('editorChange', this.form)
    },
    onDelete () {
      this.$emit('editorDelete')
      this.editorView = false
    },
    close () {
      this.editorView = false
    }
  }
}
</script>

<style lang="scss" scoped>
.editor {
  width: 350px;
  min-height: 200px;
  z-index: 999;
  border-radius: 3px;
  background: #fff;
  // box-shadow: 0 2px 4px rgb(0 0 0 / 30%);
  overflow: hidden;
}

.head {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  font-size: 16px;
  line-height: 45px;
  color: #fff;
  background: #3385ff;
  .icon {
    font-size: 18px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
}
.model {
  margin-top: 20px;
}
</style>
