<template>
  <div class="Detail">
    <div class="top">
      <div @click="returnClick"
           class="top-return">
        <img src="@static/common/assets/svg/return.svg"
             alt=""> 返回
      </div>

    </div>

    <div class="table">
      <el-table :data="tableData"
                tooltip-effect="dark"
                style="width: 100%">
        <el-table-column prop="cl1"
                         label="label1">
        </el-table-column>
        <el-table-column prop="cl2"
                         label="label2">
        </el-table-column>
        <el-table-column prop="cl3"
                         label="label3 ">
        </el-table-column>

      </el-table>

      <div class="load">
        <el-button class="load-more"
                   v-if="page_index<page_count"
                   @click='loadMore'>点击加载更多</el-button>
        <el-button disabled
                   class="load-more"
                   v-else>没有更多了</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import http from '@utils/http'
export default {
  data() {
    return {
      page_index: 1,
      page_size: 20,
      page_count: '',
      tableData: [
        {
          cl1: 'ok',
          cl2: 'speak',
          cl3: 0
        },
        {
          cl1: 'asga',
          cl2: 'good works',
          cl3: 2
        }
      ]
    }
  },
  created() {
    // this.getData()
  },
  methods: {
    successMsg(msg) {
      this.$message({
        message: msg || 'success',
        type: 'success'
      })
    },
    selectChange(val) {
      this.jud = val
    },

    returnClick() {
      this.$router.push({
        path: 'list'
      })
    },
    getData() {
      this.$store.dispatch('onLoading', true)
      http.ask({
        url: '/api',
        method: 'post',
        data: {
          page_index: this.page_index,
          page_size: this.page_size
        }
      }).then(res => {
        this.$store.dispatch('onLoading', false)
      }).catch((err) => {
        this.$store.dispatch('onLoading', false)
        console.log(err)
      })
    },

    loadMore() {
      this.page_index += 1
      if (this.page_index < this.page_count) {
        this.getData()
      }
    }
  }
}
</script>
<style lang="scss">
@import "../styles/basket.scss";
</style>
<style lang="scss" scoped>
.Detail {
  padding: 0 30px;
  .top {
    text-align: right;
    &-return {
      img {
        margin-right: 5px;
        width: 15px;
      }
      float: left;
      cursor: pointer;
      font-size: 13px;
      font-family: PingFangSC-Semibold;
      font-weight: 600;
      color: rgba(0, 106, 255, 1);
    }
  }
  .load {
    margin-top: 20px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    &-more {
      width: 134px;
    }
  }
}
</style>
