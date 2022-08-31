<template>
  <div class="note-home">
    <el-row :gutter="10">
      <el-col class="col"
              :xs="12"
              :sm="8"
              :md="6"
              :lg="4"
              :xl="4"
              v-for="(item,index) in note"
              :key="index">
        <sticky-note :note="item" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { note } from '@/json/note.js'
import StickyNote from '@/components/module/StickyNote'
export default {
  name: 'index',
  components: {
    StickyNote
  },
  data () {
    return {
      note: note
    }
  }
}
</script>

<style lang='scss' scoped>
.note-home {
  width: 100%;
  height: 100%;
  min-width: 800px;
  min-height: 100vh;
  background: url("~@/assets/note/note-back.jpg");
  box-sizing: border-box;
  padding: 0 50px 50px 50px;
  .col {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
}
</style>
