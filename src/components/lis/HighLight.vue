<template>
  <div v-highlight>
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
pre[class*="language-"] {
  padding: 20px 0 0 0;
  width: 100%;
}
</style>
