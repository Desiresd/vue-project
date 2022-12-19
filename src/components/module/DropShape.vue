<template>
  <div class="drop-shape">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DropShape',
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
.drop-shape {
  position: absolute;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  line-height: 1.2em;
  letter-spacing: 0.1em;
  user-select: none;
  font-size: 0.8em;
  transition: 0.25s;
  background: #c61dff;
  box-shadow: inset 10px 10px 10px rgba(190, 1, 254, 0.05),
    25px 35px 20px rgba(190, 1, 254, 0.1), 25px 30px 30px rgba(190, 1, 254, 0.1),
    inset -20px -20px 25px rgba(255, 255, 255, 0.5);
  border-radius: 32% 68% 56% 44% / 40% 36% 64% 60%;
  border: none;
  &:hover {
    border-radius: 50% !important;
  }
  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 30px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    opacity: 0.45;
  }
}
</style>
