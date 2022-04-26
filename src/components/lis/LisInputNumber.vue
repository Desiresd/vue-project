<template>
  <lis-form-item :label="label">
    <a-input-number :placeholder="this.$Lis.getPlaceholder(placeholder,this.label)"
                    v-decorator="[name,{ 'rules': verify}]"
                    style="width: 100%" />
    <!--v-model="value" :min="1" :max="10"/>-->

  </lis-form-item>
</template>

<script>
import LisFormItem from './LisFormItem'

export default {
  name: 'LisInputNumber',
  components: { LisFormItem },
  data () {
    return {
      value: 3
    }
  },
  props: {
    'label': String,
    'placeholder': String,
    'name': String,
    'verify': Array,
    'min': Int8Array
  }
}
</script>

<style scoped>
</style>
