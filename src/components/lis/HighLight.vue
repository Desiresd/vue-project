<template>
  <div v-highlight
       class="high-light">
    <pre class="language-html">
      <code><slot/></code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'HighHight'
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
