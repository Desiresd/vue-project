<template>
  <div>
    <lis-row>
      <lis-col :xs="12"
               :sm="12"
               :md="8"
               :lg="6"
               :xl="4"
               :xxl="3">
        <a-select default-value="lucy"
                  allowClear
                  @change="handleChange">
          <a-select-option value="lucy">lucy</a-select-option>
        </a-select>
      </lis-col>
      <lis-col :xs="12"
               :sm="12"
               :md="8"
               :lg="6"
               :xl="4"
               :xxl="3">
        <a-select default-value="Lasck"
                  disabled>
          <a-select-option value="Lasck">Lasck</a-select-option>
        </a-select>
      </lis-col>
      <lis-col :xs="12"
               :sm="12"
               :md="8"
               :lg="6"
               :xl="4"
               :xxl="3">
        <a-select default-value="Lasck"
                  loading>
          <a-select-option value="Lasck">Lasck</a-select-option>
        </a-select>
      </lis-col>
    </lis-row>
    <high-light>{{ msg }}</high-light>

    <lis-row>
      <lis-col :xs="12"
               :sm="12"
               :md="8"
               :lg="6"
               :xl="4"
               :xxl="3">
        <a-select show-search
                  allowClear
                  placeholder="Select a person"
                  option-filter-prop="children"
                  style="width: 200px"
                  :filter-option="filterOption"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChange">
          <a-select-option value="jack">
            Jack
          </a-select-option>
          <a-select-option value="lucy">
            Lucy
          </a-select-option>
          <a-select-option value="tom">
            Tom
          </a-select-option>
        </a-select>
      </lis-col>
    </lis-row>
    <high-light>{{ msgSearch }}</high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lis/HighLight'
import LisRow from '@/components/lis/LisRow'
import LisCol from '@/components/lis/LisCol'
export default {
  name: 'LisSelect',
  components: {
    HighLight,
    LisRow,
    LisCol
  },
  data () {
    return {
      msg: '',
      msgSearch: ''
    }
  },
  created () {
    this.msg = `<template>
      <a-select default-value="lucy" allowClear @change="handleChange">
        <a-select-option value="lucy">lucy</a-select-option>
      </a-select>
      <a-select default-value="Lasck" disabled>
        <a-select-option value="Lasck">Lasck</a-select-option>
      </a-select>
      <a-select default-value="Lasck" loading>
        <a-select-option value="Lasck">Lasck</a-select-option>
      </a-select>
    </template>

    export default {
      methods: {
        handleChange (value) {
          this.$message.success('selected:' + value )
        }
      }
    }`

    this.msgSearch = `<template>
      <a-select show-search
                allowClear
                placeholder="Select a person"
                option-filter-prop="children"
                style="width: 200px"
                :filter-option="filterOption"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange">
        <a-select-option value="jack">
          Jack
        </a-select-option>
        <a-select-option value="lucy">
          Lucy
        </a-select-option>
        <a-select-option value="tom">
          Tom
        </a-select-option>
      </a-select>
    </template>
    
    export default {
      methods: {
        handleChange (value) {
          this.$message.success('selected:' + value )
        },
        handleBlur () {
          console.log('blur')
        },
        handleFocus () {
          console.log('focus')
        },
        filterOption (input, option) {
          return (
            option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
          )
        }
      }
    }`
  },
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`)
      this.$message.success(`selected ${value}`)
    },
    handleBlur () {
      console.log('blur')
    },
    handleFocus () {
      console.log('focus')
    },
    filterOption (input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      )
    }
  }
}
</script>

<style scoped>
.ant-select {
  width: 150px;
}
</style>
