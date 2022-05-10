<template>
  <div v-highlight
       class="high-light">
    <pre :class="language">
      <code><slot/></code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'HighHight',
  props: {
    language: {
      type: String,
      default: () => { return 'language-html' }
    }
  }
}
</script>

<style scoped>
.high-light {
  margin: 20px 0;
}

pre[class*="language-"] {
  padding: 20px 0 0 0;
  width: 100%;
}
</style>
