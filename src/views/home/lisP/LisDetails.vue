<template>
  <lis-modal ref="detailsModal"
             width="1000px"
             title="详情"
             :showOnly="true"
             @closed="closed">
    <a-descriptions bordered
                    :size="size">
      <a-descriptions-item label="姓名">{{ information.name || ''}}</a-descriptions-item>
      <a-descriptions-item label="性别">
        <lis-dict :value="information.sex || ''"
                  dictCode="sex"
                  type="text" />
      </a-descriptions-item>
      <a-descriptions-item label="年龄">{{ information.age || ''}}</a-descriptions-item>
      <a-descriptions-item label="存款">{{ information.money || ''}}</a-descriptions-item>
      <a-descriptions-item label="日期（单）">{{ information.date || ''}}</a-descriptions-item>
      <a-descriptions-item label="日期（双）">{{ `${information.dateStart}-${information.dateEnd}` || ''}}</a-descriptions-item>
      <a-descriptions-item label="日期（年）">{{ information.dateYear || ''}}</a-descriptions-item>
      <a-descriptions-item label="备注">{{ information.remark || ''}}</a-descriptions-item>
    </a-descriptions>
  </lis-modal>
</template>

<script>
import LisModal from '@/components/lisP/LisModal'
import LisDict from '@/components/lisP/LisDict'
export default {
  name: 'LisDetails',
  components: {
    LisModal,
    LisDict
  },
  props: {
    information: Object
  },
  data () {
    return {
      size: 'default' // default | middle | small
    }
  },
  methods: {
    open () {
      this.$refs.detailsModal.visible = true
    },
    closed (e) {
      this.$refs.detailsModal.visible = false
    }
  }
}
</script>

<style scoped>
</style>
