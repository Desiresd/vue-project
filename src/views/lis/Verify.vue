<template>
  <div>
    <lis-row :gutter="[8,8]">
      <lis-col :span="18">
        <lis-form-model ref="form"
                        refs="form"
                        :model="form"
                        :rules="rules">
          <!-- lisInput name -->
          <lis-form-model-item label="name"
                               name="name">
            <lis-input v-model="form.name"
                       placeholder="name" />
          </lis-form-model-item>
          <!-- ASelect sex -->
          <lis-form-model-item label="sex"
                               name="sex">
            <a-select allowClear
                      v-model="form.sex"
                      placeholder="sex">
              <a-select-option value="男">男</a-select-option>
              <a-select-option value="女">女</a-select-option>
            </a-select>
          </lis-form-model-item>
          <!-- lisInputNumber age -->
          <lis-form-model-item label="age"
                               name="age">
            <lis-input-number v-model="form.age"
                              placeholder="age" />
          </lis-form-model-item>
          <!-- LisTextArea desc -->
          <lis-form-model-item label="desc"
                               name="desc">
            <lis-text-area v-model="form.desc"
                           placeholder="desc" />
          </lis-form-model-item>
          <!-- lisDate birthday -->
          <lis-form-model-item label="birthday"
                               name="birthday">
            <lis-date v-model="form.birthday"
                      placeholder="birthday"
                      allowClear
                      style="width: 100%" />
          </lis-form-model-item>
          <!-- lisDateArea dateArea -->
          <lis-form-model-item label="dateArea"
                               required
                               style="margin-bottom: unset;">
            <lis-date-area v-model="form.startTime"
                           :end.sync="form.endTime"
                           startName="startTime"
                           endName="endTime"
                           placeholder="dateArea"
                           allowClear />
          </lis-form-model-item>
          <!-- lisDateYear dateYear -->
          <lis-form-model-item label="dateYear"
                               name="dateYear">
            <lis-date-year v-model="form.dateYear"
                           style="width: 100%" />
          </lis-form-model-item>
          <!-- lisSwitch switch -->
          <lis-form-model-item label="switch"
                               name="switch">
            <lis-switch v-model="form.switchCheck"
                        checkChildren="是"
                        unCheckChildren="否"
                        :checked="form.switchCheck" />
          </lis-form-model-item>

          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <lis-button type="primary"
                        @click="onSubmit">
              Varify
            </lis-button>
            <lis-button style="margin-left: 10px;"
                        @click="resetForm">
              Reset
            </lis-button>
          </a-form-model-item>
        </lis-form-model>
      </lis-col>
    </lis-row>
    <high-light>{{ msg }}</high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lis/HighLight'
import LisRow from '@/components/lis/LisRow'
import LisCol from '@/components/lis/LisCol'
import LisFormModel from '@/components/lis/LisFormModel'
import LisFormModelItem from '@/components/lis/LisFormModelItem'
import LisButton from '@/components/lis/LisButton'
import LisInput from '@/components/lis/LisInput'
import LisInputNumber from '@/components/lis/LisInputNumber'
import LisTextArea from '@/components/lis/LisTextArea'
import LisDate from '@/components/lis/LisDate'
import LisDateArea from '@/components/lis/LisDateArea'
import LisDateYear from '@/components/lis/LisDateYear'
import LisSwitch from '@/components/lis/LisSwitch'
export default {
  name: 'verify',
  components: {
    HighLight,
    LisRow,
    LisCol,
    LisFormModel,
    LisFormModelItem,
    LisButton,
    LisInput,
    LisInputNumber,
    LisTextArea,
    LisDate,
    LisDateArea,
    LisDateYear,
    LisSwitch
  },
  data () {
    return {
      msg: '',
      form: {
        name: '',
        sex: undefined,
        age: null,
        desc: '',
        birthday: null,
        startTime: null,
        endTime: null,
        dateYear: null,
        switchCheck: false
      },
      rules: {
        name: [{ required: true, message: 'Please input name', trigger: 'change' }],
        sex: [{ required: true, message: 'Please select sex', trigger: 'change' }],
        age: [{ required: true, message: 'Please inputNumber age', trigger: 'change' }],
        desc: [{ required: true, message: 'Please textArea desc', trigger: 'change' }],
        birthday: [{ required: true, message: 'Please date birthday', trigger: 'change' }],
        dateYear: [{ required: true, message: 'Please dateYear year', trigger: 'change' }]
      }
    }
  },
  created () {
    this.msg = `<template>
      <div>
        <lis-row :gutter="[8,8]">
          <lis-col :span="18">
            <lis-form-model ref="form" refs="form" :model="form" :rules="rules">
              <!-- lisInput name -->
              <lis-form-model-item label="name"  name="name">
                <lis-input v-model="form.name" placeholder="name" />
              </lis-form-model-item>
              <!-- ASelect sex -->
              <lis-form-model-item label="sex" name="sex">
                <a-select allowClear v-model="form.sex" placeholder="sex">
                  <a-select-option value="男">男</a-select-option>
                  <a-select-option value="女">女</a-select-option>
                </a-select>
              </lis-form-model-item>
              <!-- lisInputNumber age -->
              <lis-form-model-item label="age" name="age">
                <lis-input-number v-model="form.age" placeholder="age" />
              </lis-form-model-item>
              <!-- LisTextArea desc -->
              <lis-form-model-item label="desc" name="desc">
                <lis-text-area v-model="form.desc" placeholder="desc" />
              </lis-form-model-item>
              <!-- lisDate birthday -->
              <lis-form-model-item label="birthday" name="birthday">
                <lis-date v-model="form.birthday" placeholder="birthday" allowClear style="width: 100%" />
              </lis-form-model-item>
              <!-- lisDateArea dateArea -->
              <lis-form-model-item label="dateArea" required style="margin-bottom: unset;">
                <lis-date-area v-model="form.startTime" :end.sync="form.endTime" startName="startTime" endName="endTime" placeholder="dateArea" allowClear />
              </lis-form-model-item>
              <!-- lisDateYear dateYear -->
              <lis-form-model-item label="dateYear" name="dateYear">
                <lis-date-year v-model="form.dateYear" style="width: 100%" />
              </lis-form-model-item>
              <!-- lisSwitch switch -->
              <lis-form-model-item label="switch" name="switch">
                <lis-switch v-model="form.switchCheck" checkChildren="是" unCheckChildren="否" :checked="form.switchCheck" />
              </lis-form-model-item>

              <lis-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
                <lis-button type="primary" @click="onSubmit">
                  Varify
                </lis-button>
                <lis-button style="margin-left: 10px;" @click="resetForm">
                  Reset
                </lis-button>
              </lis-form-model-item>
            </lis-form-model>
          </lis-col>
        </lis-row>
        <high-light>{{ msg }}</high-light>
      </div>
    </template>
    import LisRow from '@/components/lis/LisRow'
    import LisCol from '@/components/lis/LisCol'
    import LisFormModel from '@/components/lis/LisFormModel'
    import LisFormModelItem from '@/components/lis/LisFormModelItem'
    import LisButton from '@/components/lis/LisButton'
    import LisInput from '@/components/lis/LisInput'
    import LisInputNumber from '@/components/lis/LisInputNumber'
    import LisTextArea from '@/components/lis/LisTextArea'
    import LisDate from '@/components/lis/LisDate'
    import LisDateArea from '@/components/lis/LisDateArea'
    import LisDateYear from '@/components/lis/LisDateYear'
    import LisSwitch from '@/components/lis/LisSwitch'
    
    export default {
      name: 'verify',
      components: {
        HighLight,
        LisRow,
        LisCol,
        LisFormModel,
        LisFormModelItem,
        LisButton,
        LisInput,
        LisInputNumber,
        LisTextArea,
        LisDate,
        LisDateArea,
        LisDateYear,
        LisSwitch
      },
      data () {
        return {
          msg: '',
          form: {
            name: '',
            sex: undefined,
            age: null,
            desc: '',
            birthday: null,
            startTime: null,
            endTime: null,
            dateYear: null,
            switchCheck: false
          },
          rules: {
            name: [{ required: true, message: 'Please input name', trigger: 'change' }],
            sex: [{ required: true, message: 'Please select sex', trigger: 'change' }],
            age: [{ required: true, message: 'Please inputNumber age', trigger: 'change' }],
            desc: [{ required: true, message: 'Please textArea desc', trigger: 'change' }],
            birthday: [{ required: true, message: 'Please date birthday', trigger: 'change' }],
            dateYear: [{ required: true, message: 'Please dateYear year', trigger: 'change' }]
          }
        }
      },
      methods: {
        onSubmit () {
          let Bool = this.$refs.form.validate()
          if (Bool) {
            console.log('成功')
          } else {
            console.log('失败')
          }
        },
        resetForm () {
          this.$refs.form.reset()
        }
      }
    }`
  },
  methods: {
    onSubmit () {
      let Bool = this.$refs.form.validate()
      if (Bool) {
        console.log('成功')
      } else {
        console.log('失败')
      }
    },
    resetForm () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
