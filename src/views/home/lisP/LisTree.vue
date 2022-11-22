<template>
  <div>
    <lis-row>
      <lis-col :span="12">
        <lis-tree class="con"
                  :treeData="treeData"
                  :showIcon="true"
                  :replaceFields="{'key': 'no', 'title':'name'}"
                  :checkable="true"
                  :checkedKeys="checkedKeys"
                  @onSelect="onSelect"
                  @onCheck="onCheck">
        </lis-tree>
      </lis-col>
      <lis-col :span="12">
        <lis-tree class="con"
                  :treeData="treeData"
                  :showIcon="true"
                  :replaceFields="{'key': 'no', 'title':'name'}"
                  @onSelect="onSelect"
                  @onCheck="onCheck">
        </lis-tree>
      </lis-col>
    </lis-row>
    <high-light>{{ msg }}</high-light>
  </div>
</template>

<script>
import HighLight from '@/components/lisP/HighLight'
import LisRow from '@/components/lisP/LisRow'
import LisCol from '@/components/lisP/LisCol'
import LisTree from '@/components/lisP/LisTree'
export default {
  name: 'LisTrees',
  components: {
    HighLight,
    LisRow,
    LisCol,
    LisTree
  },
  data () {
    return {
      msg: '',
      treeData: [],
      selectedKeys: [],
      checkedKeys: []
    }
  },
  created () {
    this.msg = `<template>
      <lis-tree class="con"
                :treeData="treeData"
                :showIcon="true"
                :replaceFields="{'key': 'no', 'title':'name'}"
                :checkable="true"
                :checkedKeys="checkedKeys"
                @onSelect="onSelect"
                @onCheck="onCheck">
      </lis-tree>

      <lis-tree class="con"
                :treeData="treeData"
                :showIcon="true"
                :replaceFields="{'key': 'no', 'title':'name'}"
                @onSelect="onSelect"
                @onCheck="onCheck">
      </lis-tree>
    </template>
    
    export default {
      data () {
        return {
          treeData: [],
          selectedKeys: [],
          checkedKeys: []
        }
      },
      created () {
        this.treeData = [
          {
            name: 'parent 1',
            no: '0-0',
            slots: {
              icon: 'project'
            },
            children: [
              { name: 'leaf', no: '0-0-0', slots: { icon: 'subProject' } },
              { name: 'leaf', no: '0-0-1', slots: { icon: 'subProject' } }
            ]
          }
        ]
      },
      methods: {
        onSelect (key, event) {
          this.selectedKeys = key
        },
        onCheck (key, event) {
          this.checkedKeys = key
        }
      }
    }`
    this.treeData = [
      {
        name: 'parent 1',
        no: '0-0',
        slots: {
          icon: 'project'
        },
        children: [
          { name: 'leaf', no: '0-0-0', slots: { icon: 'subProject' } },
          { name: 'leaf', no: '0-0-1', slots: { icon: 'subProject' } }
        ]
      }
    ]
  },
  methods: {
    onSelect (key, event) {
      this.selectedKeys = key
    },
    onCheck (key, event) {
      this.checkedKeys = key
    }
  }
}
</script>

<style scoped>
.con {
  width: 300px;
  border: 1px solid #f5f5f5;
}
</style>
