<template>
  <div class='List'>
    <div class='top'>

      <div class='search-part'>
        <div class='search-part-wrap'>
          <el-input class='phone'
                    style='width:180px'
                    placeholder='输入手机号'
                    v-model='paginations.cellphone'>
          </el-input>
          <el-button @click='getSearch'
                     style='width: 100px;'
                     type='primary'>搜索</el-button>
        </div>

      </div>
    </div>

    <div class='table'>
      <el-table :data='tableData'
                tooltip-effect='dark'
                style='width: 100%'>
        <el-table-column prop='cl1'
                         label='label1'>
        </el-table-column>
        <el-table-column prop='cl2'
                         label='label2 '>
        </el-table-column>
        <el-table-column prop='cl3'
                         label='label3 '>
        </el-table-column>
        <el-table-column prop='cl4'
                         label='label4 '>
        </el-table-column>
        <el-table-column label="链接">
          <template slot-scope="scope">
            <span class="link"
                  @click="jumpDetail(scope.$index, scope.row)">
              查看
            </span>
          </template>
        </el-table-column>

      </el-table>
    </div>

    <div class='pagination'>
      <el-pagination :page-sizes='paginations.page_sizes'
                     :page-size='paginations.page_size'
                     :pager-count='paginations.pager_count'
                     :layout='paginations.layout'
                     :total='paginations.total'
                     :current-page='paginations.page_index'
                     @current-change='handleCurrentChange'
                     @size-change='handleSizeChange'>
      </el-pagination>
    </div>

  </div>
</template>

<script>
import http from '@utils/http'
export default {
  data() {
    return {
      accuracy: 0,
      checked: false,
      result: '',
      tableData: [{
        cl1: 'value1',
        cl2: 'value2',
        cl3: 'value4',
        cl4: 'value4'
      }],
      paginations: {
        page_index: 1, // 当前位于哪页
        total: 0, // 总数
        page_size: 20, // 1页显示多少条
        page_sizes: [20, 40, 60], // 每页显示多少条
        pager_count: 5,
        layout: 'total, sizes, prev, pager, next, jumper' // 翻页属性
      }
    }
  },
  created() {
    // this.getData()
  },
  methods: {
    jumpDetail(index, row) {
      console.log(row)
      this.$router.push({
        path: 'detail',
        query: {
          cellphone: row.cl1
        }
      })
    },
    successMsg(msg) {
      this.$message({
        message: msg || 'success',
        type: 'success'
      })
    },
    getSearch() {
      this.successMsg()
    },
    getData() {
      this.$store.dispatch('onLoading', true)
      http.ask({
        url: '/api/list',
        method: 'post',
        data: {
          id: 1
        }
      }).then(res => {
        this.$store.dispatch('onLoading', false)
      }).catch((err) => {
        this.$store.dispatch('onLoading', false)
        console.log(err)
      })
    },
    handleCurrentChange(val) {
      this.paginations.page_index = val
      this.getData()
    },
    handleSizeChange(val) {
      this.paginations.page_size = val
      this.getData()
    }
  }

}
</script>
<style lang='scss'>
@import "../styles/basket.scss";
</style>

<style lang='scss' scoped>
.List {
  padding: 0 30px;
  .top {
    text-align: right;
    .search-part {
      display: inline-block;
      height: 70px;
      line-height: 70px;
      .search-part-wrap {
        height: 40px;
        line-height: 40px;
        .checkbox {
          margin-right: 0px;
        }
      }
    }
  }
}
</style>
