<template>
  <div>
    <lis-row>
      <lis-col :span="16">
        <high-light id="title1"> {{ msg }} </high-light>
      </lis-col>
      <lis-col :span="2"></lis-col>
      <lis-col :span="4">
        <lis-anchor :value="anchorArr" />
      </lis-col>
    </lis-row>
  </div>
</template>

<script>
import HighLight from '@/components/lisP/HighLight'
import LisRow from '@/components/lisP/LisRow'
import LisCol from '@/components/lisP/LisCol'
import LisAnchor from '@/components/lisP/LisAnchor'
export default {
  name: 'LisAnchors',
  components: {
    HighLight,
    LisRow,
    LisCol,
    LisAnchor
  },
  data () {
    return {
      msg: '',
      anchorArr: [
        {
          href: '#title1',
          title: '导航1'
        },
        {
          href: '#title2',
          title: '导航2'
        },
        {
          href: '#title3',
          title: '导航3'
        },
        {
          href: '#title4',
          title: '导航4'
        }
      ]
    }
  },
  created () {
    this.msg = `<template>
        <lis-anchor :value="anchorArr" />
     </template>
     
     export default {
       data () {
          return {
            anchorArr: [
              {
                href: '#1',
                title: '导航1'
              },
              {
                href: '#2',
                title: '导航2'
              },
              {
                href: '#3',
                title: '导航3'
              },
              {
                href: '#4',
                title: '导航4'
              }
            ]
          }
        },
     }`
  }
}
</script>

<style scoped>
</style>
