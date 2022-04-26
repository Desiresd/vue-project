<template>
  <lis-form-item :label="label">

    <div>
      <a-switch :checked-children="checkChildren"
                :un-checked-children="unCheckChildren"
                :default-checked="checked" />
    </div>

  </lis-form-item>
</template>

<script>
import LisFormItem from './LisFormItem'

export default {
  name: 'LisSwitch',
  components: { LisFormItem },
  props: {
    'label': String,
    'name': String,
    'verify': Array,
    'checkChildren': String,
    'unCheckChildren': String,
    'checked': Boolean
  }
}
</script>

<style scoped>
</style>
