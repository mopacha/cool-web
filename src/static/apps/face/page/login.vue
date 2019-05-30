<template>
  <div class="Login">
    <div class="left">
      <div class="wrap">
        <div class="head-img">
          <img src="../img/pc_banner.png"
               alt="">
        </div>
        <div class="title">欢迎使用大额面签系统</div>
      </div>

    </div>
    <div class="right">
      <div class="wrap">
        <div class="label">
          坐席工号
        </div>
        <el-input v-model="input"
                  placeholder="请输入坐席工号"></el-input>
        <div>
          <el-button @click="buttonClick"
                     type="primary"
                     round>确定</el-button>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import http from '@utils/http'
import { setCookie } from '@utils/storage'
export default {
  data() {
    return {
      input: ''
    }
  },

  created() {
    //this.handleLogin()
  },
  methods: {
    jump() {
      setCookie('login_id', this.input)
      this.$router.push({
        path: 'list',
        query: this.$route.query
      })
    },
    buttonClick() {
      if (this.input.length < 1) {
        this.$message('请输入工号')
      } else if (isNaN(this.input)) {
        this.$message('工号必须为数字')
      } else {
        this.jump()
      }
    },
    handleLogin() {
      this.loading = true
      http.ask({
        url: '/query',
        method: 'post',
        data: {
          userid: 123,
          appid: '11050001'
        }
      }).then(res => {
        console.log(res)
        this.loading = false
      }).catch((err) => {
        console.log(err)
        this.loading = false
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../styles/login.scss";
</style>
