<template>
  <div class="List">

    <el-dialog class="userDia"
               v-if="dialogVisible"
               title="添加用户"
               :visible.sync="dialogVisible"
               width="30%"
               center>

      <span>用户id</span>
      <el-input class="userInput"
                v-model="userId"
                placeholder="请输入内容"></el-input>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="success"
                   @click="confirmAdduser">确 定</el-button>
      </span>
    </el-dialog>

    <div class="header"></div>
    <div class="main">
      <div class="top">
        <div class="list-title">用户列表</div>
        <el-button @click="addUser"
                   class="add-user"
                   type="success"
                   plain>添加用户</el-button>

      </div>

      <div class="table">
        <el-table :data="tableData"
                  tooltip-effect="dark"
                  style="width: 100%">
          <el-table-column prop="name"
                           label="用户姓名">
          </el-table-column>
          <el-table-column prop="status"
                           label="排队状态">
          </el-table-column>
          <el-table-column label="链接">
            <template slot-scope="scope">
              <span v-if="scope.row.online"
                    class="link"
                    @click="jumpVideo(scope.$index, scope.row)">
                前往视频
              </span>
              <span v-else>
                前往视频
              </span>
            </template>
          </el-table-column>
          <!-- <el-table-column prop="loginTime"
                           label="用户登录">
          </el-table-column> -->
          <el-table-column label="操作">
            <template slot-scope="scope">
              <span class="link"
                    @click="handleDelete(scope.$index, scope.row)">
                删除
              </span>
              <span> | </span>
              <span class="link"
                    @click="handleEdit(scope.$index, scope.row)">
                发消息
              </span>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="pagination">
        <el-pagination :page-sizes="paginations.page_sizes"
                       :page-size="paginations.page_size"
                       :page-count="paginations.page_count"
                       :pager-count='paginations.pager_count'
                       :layout="paginations.layout"
                       :total="paginations.total"
                       :current-page='paginations.page_index'
                       @current-change='handleCurrentChange'
                       @size-change='handleSizeChange'>
        </el-pagination>
      </div>
    </div>

  </div>
</template>

<script>
import http from '@utils/http'
import { setCookie, getCookie } from '@utils/storage'
import { getUrlVars } from '@utils/judge'
export default {
  data() {
    return {
      Interval: null,
      count: 60 * 60 * 24,
      userId: '',
      loading: true,
      dialogVisible: false,
      tableData: [],
      paginations: {
        isSearchPag: false,
        page_index: 1, // 当前位于哪页
        total: 0, // 总数
        page_size: 20, // 1页显示多少条
        page_sizes: [20, 40, 60], // 每页显示多少条
        page_count: 0,
        pager_count: 5,
        layout: 'total, sizes, prev, pager, next, jumper' // 翻页属性
      }
    }
  },

  created() {
    const from = getUrlVars('from')
    if (from === 'webrtc') {
      this.fresh()
    }
    this.pageData()
    this.getData()
  },
  destroyed() {
    clearInterval(this.Interval)
  },
  methods: {
    setCookie,
    getData() {
      this.Interval = setInterval(async () => {
        this.count = this.count - 1
        if (this.count <= 0) {
          clearInterval(this.Interval)
        } else {
          this.pageData()
        }
      }, 5000)
    },

    addUser() {
      this.dialogVisible = true
    },
    jumpVideo(index, row) {
      this.addRoom(row)
    },
    sendSms(row) {
      http.ask({
        url: '/inner/sms',
        method: 'post',
        data: {
          login_id: getCookie('login_id'),
          user_id: row.user_id
        }
      }).then(res => {
        this.$message('消息发送成功')
      }).catch((err) => {
        console.log(err)
      })
    },

    fresh() {
      http.ask({
        url: '/refresh',
        method: 'post',
        data: {
          token: getCookie('token')
        }
      })
    },

    // 生成房间号。也可以查房间号有没有失效
    async addRoom(row) {
      http.ask({
        url: '/inner/room',
        method: 'post',
        data: {
          login_id: getCookie('login_id'),
          user_id: row.user_id
        }
      }).then(res => {
        if (res) {
          console.log('room is:' + res)
          this.setCookie('room', res)
          this.setCookie('userid', row.user_id)
          this.setCookie('username', row.name)
          this.setCookie('token', row.token)
          this.jumpRoom()
        } else {
          this.$message('系统异常，未生成房间号')
        }
      }).catch((err) => {
        console.log(err)
      })
    },

    jumpRoom() {
      setCookie('canin', 1)
      this.$router.push({
        path: 'room',
        query: this.$route.query
      })
    },

    confirmAdduser() {
      http.ask({
        url: '/inner/add',
        method: 'post',
        data: {
          login_id: getCookie('login_id'),
          user_id: this.userId
        }
      }).then(res => {
        this.$message('添加用户成功')
        this.dialogVisible = false
      }).catch((err) => {
        console.log(err)
      })
    },
    pageData() {
      this.loading = true
      http.ask({
        url: 'inner/query',
        method: 'post',
        data: {
          login_id: getCookie('login_id')
        }
      }).then(res => {
        this.tableData = []
        if (res && res.length > 0) {
          this.tableData = res.map(item => {
            return {
              name: item.name,
              status: item.online ? '排队中' : '无人排队',
              online: item.online,
              mobile: item.mobile,
              room: item.room,
              sex: item.sex,
              user_id: item.user_id,
              token: item.token
            }
          })
        }
        this.loading = false
      }).catch(() => {
        clearInterval(this.Interval)
        this.loading = false
      })
    },
    handleCurrentChange(val) {
      this.paginations.page_index = val
      this.getData()
    },
    handleSizeChange(val) {
      this.paginations.page_size = val
      this.getData()
    },
    handleEdit(index, row) {
      this.sendSms(row)
    },
    handleDelete(index, row) {

    }
  }

}
</script>

<style rel="stylesheet/scss" lang="scss" >
@import "../styles/list.scss";
</style>
