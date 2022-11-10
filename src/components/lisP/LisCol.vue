<template>
  <a-col :align="align"
         :span="span"
         :xs="xs"
         :sm="sm"
         :md="md"
         :lg="lg"
         :xl="xl"
         :xxl="xxl">
    <slot />
  </a-col>
</template>

<script>
export default {
  name: 'LisCol',
  props: {
    align: String,
    span: Number,
    xs: Number | Object,
    sm: Number | Object,
    md: Number | Object,
    lg: Number | Object,
    xl: Number | Object,
    xxl: Number | Object
  }
}
</script>

<style scoped>
</style>
