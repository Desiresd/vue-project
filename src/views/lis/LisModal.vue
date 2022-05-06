<template>
  <div>
    <lis-button type="primary"
                @click="open1">打开模态框（确认/关闭）</lis-button>
    <lis-button type="primary"
                @click="open2">打开模态框（关闭）</lis-button>
    <lis-modal ref="modal1"
               width="800px"
               @ok="ok1"
               @cancel="cancel1">
      我是内容1
    </lis-modal>
    <lis-modal ref="modal2"
               width="800px"
               @ok="ok2">
      我是内容2
    </lis-modal>
    <high-light>{{ msg }}</high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lis/HighLight'
import LisButton from '@/components/lis/LisButton'
import LisModal from '@/components/lis/LisModal'
export default {
  name: 'LisModals',
  components: {
    HighLight,
    LisButton,
    LisModal
  },
  data () {
    return {
      visible: false
    }
  },
  created () {
    this.msg = `<template>
      <lis-button type="primary" @click="open1">打开模态框（确认/关闭）</lis-button>
      <lis-button type="primary" @click="open2">打开模态框（关闭）</lis-button>
      <lis-modal ref="modal1" width="800px" @ok="ok1" @cancel="cancel2">
        我是内容1
      </lis-modal>
      <lis-modal ref="modal2" width="800px" @ok="ok2" @cancel="cancel2">
        我是内容2
      </lis-modal>
    </template>
    
    export default {
      data () {
        return {
          visible: false
        }
      },
      methods: {
        open1 () {
          this.$refs.modal1.visible = true
        },
        ok1 (e) {
          console.log(e)
          this.$refs.modal1.visible = false
        },
        cancel1 (e) {
          console.log(e)
          this.$refs.modal1.visible = false
        },
        open2 () {
          this.$refs.modal2.showOnly = true
          this.$refs.modal2.visible = true
        },
        ok2 (e) {
          console.log(e)
          this.$refs.modal2.visible = false
          this.$refs.modal2.showOnly = false
        }
      }
    }`
  },
  methods: {
    open1 () {
      this.$refs.modal1.visible = true
    },
    ok1 (e) {
      console.log(e)
      this.$refs.modal1.visible = false
    },
    cancel1 (e) {
      console.log(e)
      this.$refs.modal1.visible = false
    },
    open2 () {
      this.$refs.modal2.showOnly = true
      this.$refs.modal2.visible = true
    },
    ok2 (e) {
      console.log(e)
      this.$refs.modal2.visible = false
      this.$refs.modal2.showOnly = false
    }
  }
}
</script>

<style scoped>
</style>
