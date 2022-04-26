<template>
  <div class="personal-ea">
    <mains id="home" />
    <abouts id="about" />
    <skills />
    <majors />
    <works id="works" />
    <collection id="collection" />
    <!-- 回到顶部 -->
    <el-backtop>
      <span class="back-top">Top</span>
    </el-backtop>
  </div>
</template>

<script>
import Mains from './main/index.vue'
import Abouts from './abouts/index.vue'
import Skills from './skills/index.vue'
import Majors from './majors/index.vue'
import Works from './works/index'
import Collection from './collection/index.vue'
export default {
  name: 'index',
  components: {
    Mains,
    Abouts,
    Skills,
    Majors,
    Works,
    Collection
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.personal-ea {
  min-width: 900px;
  overflow: auto;
}

.el-backtop {
  width: 50px;
  height: 50px;
}

.back-top {
  font-size: 14px;
  letter-spacing: 1px;
  color: #e66948;
}
</style>
