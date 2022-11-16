<template>
  <div>
    <lis-button type="primary"
                @click="open1">打开模态框（确认/取消）</lis-button>
    <lis-button type="primary"
                @click="open2">打开模态框（只读）</lis-button>
    <lis-modal ref="modal1"
               width="800px"
               @ok="ok"
               @cancel="cancel">
      我是内容1
    </lis-modal>
    <lis-modal ref="modal2"
               width="800px"
               :showOnly="true"
               @closed="closed">
      我是内容2
    </lis-modal>
    <high-light>{{ msg }}</high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lisP/HighLight'
import LisButton from '@/components/lisP/LisButton'
import LisModal from '@/components/lisP/LisModal'
export default {
  name: 'LisModals',
  components: {
    HighLight,
    LisButton,
    LisModal
  },
  data () {
    return {
    }
  },
  created () {
    this.msg = `<template>
      <lis-button type="primary" @click="open1">打开模态框（确认/关闭）</lis-button>
      <lis-button type="primary" @click="open2">打开模态框（关闭）</lis-button>
      <lis-modal ref="modal1" width="800px" @ok="ok" @cancel="cancel">
        我是内容1
      </lis-modal>
      <lis-modal ref="modal2" width="800px" :showOnly="true" @closed="closed">
        我是内容2
      </lis-modal>
    </template>
    
    export default {
      data () {
        return {
        }
      },
      methods: {
        open1 () {
          this.$refs.modal1.visible = true
        },
        ok (e) {
          this.$refs.modal1.visible = false
        }
        cancel (e) {
          this.$refs.modal1.visible = false
        },
        open2 () {
          this.$refs.modal2.visible = true
        },
        closed (e) {
          this.$refs.modal2.visible = false
        }
      }
    }`
  },
  methods: {
    open1 () {
      this.$refs.modal1.visible = true
    },
    open2 () {
      this.$refs.modal2.visible = true
    },
    ok (e) {
      this.$refs.modal1.visible = false
    },
    cancel (e) {
      this.$refs.modal1.visible = false
    },
    closed (e) {
      this.$refs.modal2.visible = false
    }
  }
}
</script>

<style scoped>
</style>
