<template>
  <el-dialog :visible.sync="visible"
             width="420px"
             :before-close="handleClose">
    <template #title>
      <span class="title">{{ title }}</span>
    </template>
    <el-form :model="ruleForm"
             :rules="rules"
             ref="ruleForm"
             label-width="50px">
      <el-form-item label="内容"
                    prop="content">
        <el-input v-model="ruleForm.content"
                  size="small" />
      </el-form-item>
    </el-form>
    <span slot="footer"
          class="dialog-footer">
      <el-button @click="handleClose"
                 size="small">取 消</el-button>
      <el-button type="primary"
                 @click="submitForm('ruleForm')"
                 size="small">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'dialogAdd',
  props: {
    title: {
      type: String,
      default: () => { return 'Add' }
    }
  },
  data () {
    return {
      visible: false,
      ruleForm: {
        content: ''
      },
      rules: {
        content: [
          { required: true, message: '请输入内容', trigger: 'change' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const data = JSON.parse(JSON.stringify(this.ruleForm))
          this.$emit('getForm', data)
          this.resetForm('ruleForm')
        } else {
          return false
        }
      })
    },
    handleClose () {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.resetForm('ruleForm')
        })
        .catch(_ => { })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
      this.visible = false
    }
  }
}
</script>

<style lang='scss' scoped>
.title {
  font-size: 16px;
}
</style>
