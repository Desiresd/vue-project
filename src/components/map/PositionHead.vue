<template>
  <div class="position-head">
    <img src="@/assets/map/right.png"
         width="25" />
    <span style="margin-left: 10px;">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.position-head {
  width: 100%;
  height: 36px;
  background: #617df5;
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #ffffff;
  padding: 0 6px;
}

.position-head img {
  cursor: pointer;
}
</style>
