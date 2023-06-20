<template>
  <div>
    <vue-extend />
    <vue-next-tick />
    <vue-set />
    <vue-delete />
    <vue-directive />
    <vue-filter />
    <vue-component />
    <vue-compile />
    <vue-s-s />
    <vue-provide />
  </div>
</template>

<script>
import VueExtend from './Vue.extend.vue'
import VueNextTick from './Vue.nextTick.vue'
import VueSet from './Vue.set.vue'
import VueDelete from './Vue.delete.vue'
import VueDirective from './Vue.directive.vue'
import VueFilter from './Vue.filter.vue'
import VueComponent from './Vue.component.vue'
import VueCompile from './Vue.compile.vue'
import VueSS from './圣杯双飞翼布局.vue'
import VueProvide from './provide.vue'

export default {
  name: 'Index',
  components: {
    VueExtend,
    VueNextTick,
    VueSet,
    VueDelete,
    VueDirective,
    VueFilter,
    VueComponent,
    VueCompile,
    VueSS,
    VueProvide
  },
  data() {
    return {
      name: 1
    }
  }
}
</script>

<style lang='scss' scoped></style>
