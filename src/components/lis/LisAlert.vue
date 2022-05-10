<template>
  <a-alert :message="message"
           :type="type"
           :description="description"
           show-icon
           :closable="closable" />
</template>

<script>
export default {
  name: 'LisAlert',
  props: {
    message: String,
    type: String,
    description: String,
    closable: Boolean
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
</style>
