<template>
  <lis-form-item :label="label">
    <a-input :placeholder="this.$Lis.getPlaceholder(placeholder,this.label)"
             v-decorator="[name,{ 'rules': verify}]" />
  </lis-form-item>
</template>

<script>

export default {
  name: 'LisInput',
  // components: { LisFormItem },
  props: {
    'label': String,
    'placeholder': String,
    'name': String,
    'verify': Array
  }
}
</script>

<style scoped>
</style>
