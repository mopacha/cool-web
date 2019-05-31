<template>
  <div>
    <el-card class="login-form-layout">
      <el-form autoComplete="on"
               :model="loginForm"
               :rules="loginRules"
               ref="loginForm"
               label-position="left">
        <div style="text-align: center">
          <icon name="chameleon"
                :w="40"
                :h="40"
                id="animation"></icon>
        </div>
        <h2 class="login-title color-main">cool-web</h2>
        <el-form-item prop="username">
          <el-input name="username"
                    type="text"
                    v-model="loginForm.username"
                    autoComplete="on"
                    placeholder="请输入用户名">
            <span slot="prefix">
              <icon class="color-main"
                    name="user"
                    :w="16"
                    :h="16"></icon>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input name="password"
                    :type="pwdType"
                    @keyup.enter.native="handleLogin"
                    v-model="loginForm.password"
                    autoComplete="on"
                    placeholder="请输入密码">
            <span slot="prefix">
              <icon class="color-main"
                    name="password"
                    :w="14"
                    :h="14"></icon>
            </span>
            <span slot="suffix"
                  @click="showPwd">
              <icon class="color-main"
                    name="eye"
                    :w="15"
                    :h="15"></icon>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item style="margin:30px 0 60px 0">
          <el-button style="width: 100%"
                     type="primary"
                     :loading="loading"
                     @click.native.prevent="handleLogin">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <img :src="loginCenterBg"
         class="login-center-layout">
  </div>
</template>

<script>
import { isvalidUsername } from '@utils/validate'
import loginCenterBg from '@common/assets/img/login_center_bg.png'
import http from '@utils/http'
import { setCookie } from '@utils/storage'

export default {
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 3) {
        callback(new Error('密码不能小于3位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      pwdType: 'password',
      loginCenterBg,
      loading: false
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },

    jumpList() {
      setCookie('token', 'ssssfagagaagag')
      this.$router.push({
        path: 'list'
      })
    },

    showLoading(flag) {
      this.$store.dispatch('onLoading', flag)
      this.loading = flag
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.showLoading(true)
          http.ask({
            url: '/api/login',
            method: 'post',
            data: {
              userid: 123,
              appid: '11050001'
            }
          }).then(res => {
            this.jumpList()
            this.showLoading(false)
          }).catch(() => {
            this.jumpList()
            this.showLoading(false)
          })
        } else {
          console.log('参数验证不合法！')
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../styles/login.scss";
</style>
