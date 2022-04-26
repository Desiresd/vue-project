<template>
  <a-step title="title">
    <slot />
  </a-step>
</template>

<script>
export default {
  name: 'LisStep',
  props: {
    title: {
      type: String,
      default: () => { return '' }
    },
    description: String,
    icon: String,
    status: String,
    subTitle: String,
    disabled: Boolean
  }
}
</script>

<style>
</style>
