<template>
  <div class="table-cabinet">
    <a-table :rowKey="(r, index)=>{ return index }"
             :columns="columns"
             :data-source="tableData"
             :pagination="false">
    </a-table>
  </div>
</template>

<script>
export default {
  name: 'TableCabinet',
  data () {
    return {
      columns: [
        {
          title: '企业名称',
          dataIndex: 'name',
          width: '16.7%',
          ellipsis: true

        },
        {
          title: '烟气湿度ex527',
          dataIndex: 'ex',
          width: '16.6%',
          align: 'center',
          ellipsis: true
        },
        {
          title: '烟气湿度hourCount',
          dataIndex: 'hourCount',
          width: '16.6%',
          align: 'center',
          ellipsis: true
        },
        {
          title: '烟气湿度va1527',
          dataIndex: 'va1',
          width: '16.6%',
          align: 'center',
          ellipsis: true
        },
        {
          title: '烟气湿度va2527',
          dataIndex: 'va2',
          width: '16.6%',
          align: 'center',
          ellipsis: true
        },
        {
          title: '烟气湿度state527',
          dataIndex: 'state',
          width: '16.6%',
          align: 'center',
          ellipsis: true
        }
      ],
      tableData: [
        {
          name: '阳谷鑫协再生资源回收利用有限公司',
          ex: '40%RH',
          hourCount: '40%RH',
          va1: '40%RH',
          va2: '40%RH',
          state: '40%RH'
        },
        {
          name: '某某某某公司',
          ex: '30%RH',
          hourCount: '30%RH',
          va1: '30%RH',
          va2: '30%RH',
          state: '30%RH'
        },
        {
          name: '某某某公司',
          ex: '20%RH',
          hourCount: '20%RH',
          va1: '20%RH',
          va2: '20%RH',
          state: '20%RH'
        },
        {
          name: '某某公司',
          ex: '10%RH',
          hourCount: '10%RH',
          va1: '10%RH',
          va2: '10%RH',
          state: '10%RH'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.table-cabinet {
  position: relative;
  background: url("~@/assets/home/tableBack.png") no-repeat;
  background-size: 100% 105%;
  background-clip: padding-box;
  background-position: right;
  padding: 5px 16px 12px 10px;
  margin-top: 20px;
  /deep/ .ant-table-thead > tr > th {
    border-bottom: unset;
    background: transparent;
    color: #53d7ff;
    text-align: center;
  }
  /deep/ .ant-table-tbody > tr > td {
    border-bottom: unset;
    color: #ffffff;
  }
  /deep/ .ant-table-tbody > tr:hover > td {
    background-color: transparent !important;
  }
}
</style>
