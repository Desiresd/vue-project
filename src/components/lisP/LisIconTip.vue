<template>
  <lis-tool-tip :title="title"
                :placement="placement">
    <a-icon :type="icon"
            @click="iconClick" />
  </lis-tool-tip>
</template>

<script>
import LisToolTip from './LisToolTip'
export default {
  name: 'LisIconTip',
  components: {
    LisToolTip
  },
  props: {
    title: { type: String, default: () => '' },
    placement: { type: String, default: () => 'top' },
    icon: { type: String, default: () => 'arrow-left' }
  },
  data () {
    return {

    }
  },
  methods: {
    iconClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
</style>
