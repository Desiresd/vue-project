<template>
  <!-- 锚点 -->
  <a-anchor :target-offset="targetOffset"
            class="anchor"
            :offsetTop='60'
            @click="e=>e.preventDefault()">
    <a-anchor-link v-for="(item,key) in value"
                   :key="key"
                   :href="item.href"
                   :title="item.title" />
  </a-anchor>
</template>

<script>
export default {
  props: {
    value: Array
  },
  data () {
    return {
      targetOffset: undefined // 锚点的位置
    }
  },
  mounted () {
    this.targetOffset = window.innerHeight / 2
  }
}
</script>

<style scoped>
::v-deep .anchor {
  position: fixed;
  width: 100%;
}

::v-deep .ant-anchor-wrapper {
  padding: 20px 0;
}

::v-deep .ant-anchor-ink {
  box-sizing: border-box;
  padding-left: 20px;
}

::v-deep .ant-anchor-link {
  padding-left: 35px;
}

::v-deep .ant-anchor-ink-ball {
  left: 98%;
}

::v-deep a.ant-anchor-link-title {
  font-size: 13px;
}

::v-deep .ant-anchor-ink-ball {
  width: 13px;
  height: 13px;
  background: url(/src/assets/correct.png);
  background-size: 100% 100%;
  border: none;
}
</style>
