<template>
  <div class="search-area">
    <!--条件选择区域-->
    <lis-form-model ref="form"
                    :model="form"
                    layout="inline"
                    @keyup.enter.native="handleSearch">
      <a-row :gutter="12">
        <a-col :xs="16"
               :sm="16"
               :md="16"
               :lg="16"
               :xl="19">
          <a-row :gutter="12">
            <div v-for="(item,index) in formTypeData"
                 :key="index">
              <!--自定义控件插槽-->
              <a-col :xs="24"
                     :sm="24"
                     :md="12"
                     :lg="12"
                     :xl="8"
                     v-if="item.custom_widget"
                     v-show="index < SINGLE_LINE_NUM || toggleSearchStatus">
                <lis-form-model-item :label="item.name">
                  <slot name="custom_widget"
                        :item="item">
                  </slot>
                </lis-form-model-item>
              </a-col>
              <!--Input-->
              <a-col :xs="24"
                     :sm="24"
                     :md="12"
                     :lg="12"
                     :xl="8"
                     v-else-if="item.type === 'input'"
                     v-show="index < SINGLE_LINE_NUM || toggleSearchStatus">
                <lis-form-model-item :label="item.name">
                  <lis-input v-model="form.value[index].modelVal"
                             :placeholder="item.placeholderText" />
                </lis-form-model-item>
              </a-col>
              <!--Dict-->
              <a-col :xs="24"
                     :sm="24"
                     :md="12"
                     :lg="12"
                     :xl="8"
                     v-else-if="item.type === 'dict'"
                     v-show="index < SINGLE_LINE_NUM || toggleSearchStatus">
                <lis-form-model-item :label="item.name">
                  <lis-dict v-model="form.value[index].modelVal"
                            type="select"
                            :dictCode="item.dictCode" />
                </lis-form-model-item>
              </a-col>
              <!--InputNumber-->
              <a-col :xs="24"
                     :sm="24"
                     :md="12"
                     :lg="12"
                     :xl="8"
                     v-else-if="item.type === 'inputNumber'"
                     v-show="index < SINGLE_LINE_NUM || toggleSearchStatus">
                <lis-form-model-item :label="item.name">
                  <lis-input-number v-model="form.value[index].modelVal"
                                    :placeholder="item.placeholderText" />
                </lis-form-model-item>
              </a-col>
              <!--Input-->
              <a-col :xs="24"
                     :sm="24"
                     :md="12"
                     :lg="12"
                     :xl="8"
                     v-else-if="item.type === 'textArea'"
                     v-show="index < SINGLE_LINE_NUM || toggleSearchStatus">
                <lis-form-model-item :label="item.name">
                  <lis-text-area v-model="form.value[index].modelVal"
                                 :placeholder="item.placeholderText" />
                </lis-form-model-item>
              </a-col>
              <!--Date-->
              <a-col :xs="24"
                     :sm="24"
                     :md="12"
                     :lg="12"
                     :xl="8"
                     v-else-if="item.type === 'date'"
                     v-show="index < SINGLE_LINE_NUM || toggleSearchStatus">
                <lis-form-model-item :label="item.name">
                  <lis-date v-model="form.value[index].modelVal"
                            :placeholder="item.placeholderText"
                            allowClear
                            style="width: 100%" />
                </lis-form-model-item>
              </a-col>
              <!--DateYear-->
              <a-col :xs="24"
                     :sm="24"
                     :md="12"
                     :lg="12"
                     :xl="8"
                     v-else-if="item.type === 'dateYear'"
                     v-show="index < SINGLE_LINE_NUM || toggleSearchStatus">
                <lis-form-model-item :label="item.name">
                  <lis-date-year v-model="form.value[index].modelVal"
                                 style="width: 100%" />
                </lis-form-model-item>
              </a-col>
              <!--DateArea-->
              <a-col :xs="24"
                     :sm="24"
                     :md="24"
                     :lg="24"
                     :xl="16"
                     v-else-if="item.type === 'dateArea'"
                     v-show="index < SINGLE_LINE_NUM || toggleSearchStatus">
                <lis-form-model-item :label="item.name"
                                     :labelCol="{'span': 6}">
                  <lis-date-area v-model="form.value[index].modelVal"
                                 :end.sync="form.value[index].modelValT"
                                 style="width: 100%" />
                </lis-form-model-item>
              </a-col>
            </div>
          </a-row>
        </a-col>
        <!--按钮操作区域-->
        <a-col :xs="8"
               :sm="8"
               :md="8"
               :lg="8"
               :xl="5">
          <lis-form-model-item :labelCol="{'span': 0}"
                               :wrapperCol="{'span': 24}">
            <a-button type="primary"
                      icon="search"
                      @click="handleSearch()">查询</a-button>
            <a-button type="primary"
                      @click="resetSearch()"
                      icon="reload"
                      style="margin-left: 8px">重置</a-button>
            <a @click="handleToggleSearch"
               style="margin-left: 8px"
               v-if="formTypeData.length > SINGLE_LINE_NUM">
              {{ toggleSearchStatus ? '收起' : '展开' }}
              <a-icon :type="toggleSearchStatus ? 'up' : 'down'" />
            </a>
          </lis-form-model-item>
        </a-col>
      </a-row>
    </lis-form-model>
  </div>
</template>

<script>
// 引入策略类
import { LisTable } from './logic/strategy.js'
import LisFormModel from '@/components/lisP/LisFormModel'
import LisFormModelItem from '@/components/lisP/LisFormModelItem'
import LisDict from '@/components/lisP/LisDict'
import LisInput from '@/components/lisP/LisInput'
import LisInputNumber from '@/components/lisP/LisInputNumber'
import LisTextArea from '@/components/lisP/LisTextArea'
import LisDate from '@/components/lisP/LisDate'
import LisDateYear from '@/components/lisP/LisDateYear'
import LisDateArea from '@/components/lisP/LisDateAreaTable'
export default {
  name: 'LisGroupQuery',
  props: {
    formTypeData: Array
  },
  components: {
    LisFormModel,
    LisFormModelItem,
    LisDict,
    LisInput,
    LisInputNumber,
    LisTextArea,
    LisDate,
    LisDateYear,
    LisDateArea
  },
  data () {
    return {
      form: {
        value: []
      },
      valueEmpty: [],
      toggleSearchStatus: false,
      // 单行展示的个数
      SINGLE_LINE_NUM: 3
    }
  },
  created () {
    /* 初始化数据,增加条件默认值 */
    let keys = Object.keys(LisTable)
    for (let item of this.formTypeData) {
      if (keys.includes(item.type)) {
        let params = {
          key: item.key,
          modelVal: LisTable[item.type]
        }
        if (item.keyT) {
          params.keyT = item.keyT
          params.modelValT = LisTable[item.type]
        }
        this.form.value.push(params)
      }
    }
    this.valueEmpty = JSON.parse(JSON.stringify(this.form.value))
  },
  methods: {
    handleToggleSearch () {
      this.toggleSearchStatus = !this.toggleSearchStatus
    },
    handleSearch () {
      let form = {}
      for (let item of this.form.value) {
        form[item.key] = item.modelVal
        if (item.keyT) {
          form[item.keyT] = item.modelValT
        }
      }
      this.$emit('handleSearch', form)
    },
    resetSearch () {
      this.form.value = JSON.parse(JSON.stringify(this.valueEmpty))
      this.$emit('resetSearch')
    }
  }
}
</script>

<style scoped>
>>> .ant-form-item {
  margin-bottom: 10px;
}
</style>
