<template>
  <div class="catalogue">
    <h2>{{ list.head || '' }}</h2>
    <div v-for="(item,index) in list.catalog"
         :key="index">
      <router-link :to="item.router">
        <span>
          {{ item.key }} &nbsp;
          {{ item.name }}
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Catalogue',
  props: {
    list: {
      type: Object,
      default: () => { return {} }
    }
  }
}
</script>

<style lang='scss' scoped>
$color-text: #1d2033;
.catalogue {
  width: 50%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  writing-mode: vertical-lr;
  box-sizing: border-box;
  padding-top: 10%;
  h2 {
    letter-spacing: 6px;
  }
  div {
    box-sizing: border-box;
    padding: 0 10px;
    span {
      color: $color-text;
      letter-spacing: 3px;
      cursor: pointer;
      box-sizing: border-box;
      padding: 10px 10px;
      &:hover {
        font-size: 15px;
        box-shadow: 0px 0px 20px 4px #918f8f;
      }
    }
  }
}
</style>
