<template>
  <div>
    <lis-row :gutter="[8,8]">
      <lis-col :span="18">
        <lis-form-model ref="form"
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
          <!-- LisDict sex -->
          <lis-form-model-item label="dict"
                               name="dict">
            <lis-dict v-model="form.dict"
                      type="select"
                      dictCode="sex" />
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

          <lis-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <lis-button type="primary"
                        @click="onSubmit">
              Varify
            </lis-button>
            <lis-button style="margin-left: 10px;"
                        @click="resetForm">
              Reset
            </lis-button>
          </lis-form-model-item>
        </lis-form-model>
      </lis-col>
    </lis-row>
    <high-light>{{ msg }}</high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lisP/HighLight'
import LisRow from '@/components/lisP/LisRow'
import LisCol from '@/components/lisP/LisCol'
import LisFormModel from '@/components/lisP/LisFormModel'
import LisFormModelItem from '@/components/lisP/LisFormModelItem'
import LisButton from '@/components/lisP/LisButton'
import LisDict from '@/components/lisP/LisDict'
import LisInput from '@/components/lisP/LisInput'
import LisInputNumber from '@/components/lisP/LisInputNumber'
import LisTextArea from '@/components/lisP/LisTextArea'
import LisDate from '@/components/lisP/LisDate'
import LisDateArea from '@/components/lisP/LisDateArea'
import LisDateYear from '@/components/lisP/LisDateYear'
import LisSwitch from '@/components/lisP/LisSwitch'
export default {
  name: 'verify',
  components: {
    HighLight,
    LisRow,
    LisCol,
    LisFormModel,
    LisFormModelItem,
    LisButton,
    LisDict,
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
        dict: '',
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
        dict: [{ required: true, message: 'Please select dict', trigger: 'change' }],
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
            <lis-form-model ref="form" :model="form" :rules="rules">
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
              <!-- LisDict sex -->
              <lis-form-model-item label="dict" name="dict">
                <lis-dict v-model="form.dict" type="select" dictCode="sex" />
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
    import LisRow from '@/components/lisP/LisRow'
    import LisCol from '@/components/lisP/LisCol'
    import LisFormModel from '@/components/lisP/LisFormModel'
    import LisFormModelItem from '@/components/lisP/LisFormModelItem'
    import LisButton from '@/components/lisP/LisButton'
    import LisDict from '@/components/lisP/LisDict'
    import LisInput from '@/components/lisP/LisInput'
    import LisInputNumber from '@/components/lisP/LisInputNumber'
    import LisTextArea from '@/components/lisP/LisTextArea'
    import LisDate from '@/components/lisP/LisDate'
    import LisDateArea from '@/components/lisP/LisDateArea'
    import LisDateYear from '@/components/lisP/LisDateYear'
    import LisSwitch from '@/components/lisP/LisSwitch'
    
    export default {
      name: 'verify',
      components: {
        HighLight,
        LisRow,
        LisCol,
        LisFormModel,
        LisFormModelItem,
        LisButton,
        LisDict,
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
            dict: [{ required: true, message: 'Please select dict', trigger: 'change' }],
            age: [{ required: true, message: 'Please inputNumber age', trigger: 'change' }],
            desc: [{ required: true, message: 'Please textArea desc', trigger: 'change' }],
            birthday: [{ required: true, message: 'Please date birthday', trigger: 'change' }],
            dateYear: [{ required: true, message: 'Please dateYear year', trigger: 'change' }]
          }
        }
      },
      methods: {
        onSubmit () {
          this.$refs.form.validate()
          this.$nextTick(() => {
            let Bool = this.$refs.form.validState
            if (Bool) {
              this.$message.success('校验通过')
            } else {
              this.$message.error('校验未通过')
            }
          })
        },
        resetForm () {
          this.$refs.form.reset()
        }
      }
    }`
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate()
      this.$nextTick(() => {
        let Bool = this.$refs.form.validState
        if (Bool) {
          this.$message.success('校验通过')
        } else {
          this.$message.error('校验未通过')
        }
      })
    },
    resetForm () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style scoped>
</style>
