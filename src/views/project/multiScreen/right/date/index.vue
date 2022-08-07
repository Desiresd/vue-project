<template>
  <div class="date-time">
    <span>{{ year }}</span>年
    <span>{{ month }}</span>月
    <span>{{ day }}</span>日&nbsp;&nbsp;&nbsp;
    星期 <span>{{ week }}</span>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      year: null,
      month: null,
      day: null,
      week: null
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      let wk = new Date().getDay()
      let yy = new Date().getFullYear()
      let mm = new Date().getMonth() + 1
      let dd = new Date().getDate()
      let weeks = ['日', '一', '二', '三', '四', '五', '六']
      this.year = yy
      this.month = mm
      this.day = dd
      this.week = weeks[wk]
    }
  }
}
</script>

<style lang="scss" scoped>
.date-time {
  font-size: 16px;
  span {
    font-size: 26px;
    color: #2f9edf;
    margin-left: 2px;
    margin-right: 2px;
  }
}
</style>
