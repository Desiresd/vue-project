<template>
  <div>
    <lis-group-query :formTypeData="formTypeData"
                     @handleSearch="handleSearch"
                     @resetSearch="resetSearch">
      <template #custom_widget="{ item }">
        <lis-input v-model="form.slotT"
                   :placeholder="item.placeholderText" />
      </template>
    </lis-group-query>
    <high-light>{{ msg }}</high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lisP/HighLight'
import LisGroupQuery from '@/components/lisP/LisGroupQuery.vue'
import LisInput from '@/components/lisP/LisInput'
export default {
  name: 'LisGroupQuerys',
  components: {
    HighLight,
    LisGroupQuery,
    LisInput
  },
  data () {
    return {
      msg: '',
      formTypeData: [
        {
          name: '插槽',
          placeholderText: '插槽测试',
          type: 'input',
          custom_widget: true,
          key: 'slotT'
        },
        {
          name: '名字',
          placeholderText: '名字',
          type: 'input',
          key: 'name'
        },
        {
          name: '性别',
          placeholderText: '性别',
          type: 'dict',
          dictCode: 'sex',
          key: 'sex'
        },
        {
          name: '年龄',
          placeholderText: '年龄',
          type: 'inputNumber',
          key: 'age'
        },
        {
          name: '日期',
          placeholderText: '日期',
          type: 'date',
          key: 'date'
        },
        {
          name: '日期(年)',
          placeholderText: '日期(年)',
          type: 'dateYear',
          key: 'dateYear'
        },
        {
          name: '日期(区域)',
          placeholderText: '',
          type: 'dateArea',
          key: 'dateArea',
          keyT: 'dateAreaT'
        },
        {
          name: '备注',
          placeholderText: '备注',
          type: 'textArea',
          key: 'remark'
        }
      ],
      form: {
        slotT: ''
      }
    }
  },
  created () {
    this.msg = `<lis-group-query :formTypeData="formTypeData" @handleSearch="handleSearch" @resetSearch="resetSearch">
      <template #custom_widget="{ item }">
        <lis-input v-model="form.slotT" :placeholder="item.placeholderText" />
      </template>
    </lis-group-query>
    
    export default {
      data () {
        return {
          formTypeData: [
            {
              name: '插槽',
              placeholderText: '插槽测试',
              type: 'input',
              custom_widget: true,
              key: 'slotT'
            },
            {
              name: '名字',
              placeholderText: '名字',
              type: 'input',
              key: 'name'
            },
            {
              name: '性别',
              placeholderText: '性别',
              type: 'dict',
              dictCode: 'sex',
              key: 'sex'
            },
            {
              name: '年龄',
              placeholderText: '年龄',
              type: 'inputNumber',
              key: 'age'
            },
            {
              name: '日期',
              placeholderText: '日期',
              type: 'date',
              key: 'date'
            },
            {
              name: '日期(年)',
              placeholderText: '日期(年)',
              type: 'dateYear',
              key: 'dateYear'
            },
            {
              name: '备注',
              placeholderText: '备注',
              type: 'textArea',
              key: 'remark'
            }
          ],
          form: {
            slotT: ''
          }
        }
      },
      methods: {
        handleSearch (form) {
          form.slotT = this.form.slotT
          this.$message.success('查询成功')
        },
        resetSearch () {
          this.form.slotT = ''
          this.$message.success('重置成功')
        }
      }
    }`
  },
  methods: {
    handleSearch (params) {
      params.slotT = this.form.slotT
      this.$message.success('查询成功')
      console.log(params)
    },
    resetSearch () {
      this.form.slotT = ''
      this.$message.success('重置成功')
    }
  }
}
</script>

<style scoped>
</style>
