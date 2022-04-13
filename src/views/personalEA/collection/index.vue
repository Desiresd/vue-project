<template>
  <div class="collection">
    <title-bar name="个人作品集" />
  </div>
</template>

<script>
import titleBar from '@/components/common/titleBar.vue'
export default {
  name: 'index',
  components: {
    titleBar
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.collection {
  min-height: 350px;
  background: #3d4557;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 50px 0 30px 0;
  font-size: 18px;
}
</style>
