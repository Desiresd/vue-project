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
        <div class="note"
             :style="{color: '#000'}">
          <el-image class="image"
                    :src="require('@/assets/note/'+'note-gc.jpg')"
                    :style="{width: '230px',height: '380px'}"></el-image>
          <div class="content">
            <span v-for="(ite,inde) in item"
                  :key="inde">
              {{ ite }}
            </span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { note } from '@/json/note.js'
export default {
  name: 'index',
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
    .note {
      position: relative;
      width: 230px;
      height: 380px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 45px;
      .image {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
      }
      .content {
        z-index: 9;
        box-sizing: border-box;
        padding: 30px;
        writing-mode: vertical-rl;
        span {
          display: block;
          position: inherit;
          letter-spacing: 5px;
          line-height: 30px;
          font-size: 16px;
          &:last-child {
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
