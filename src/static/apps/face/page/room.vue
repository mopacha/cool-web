<template>
  <div class="Room">
    <div class="left">
      <div class="wrap">
        <div class="head-img">
          <img src="../img/pc_banner.png"
               alt="">
        </div>
        <div class="title">坐席：{{login_id}}</div>
      </div>
    </div>
    <div class="right">
      <div class="wrap">
        <div class="webrtc">
          <iframe width="100%"
                  frameborder="0"
                  height="100%"
                  :src="roomUrl"
                  allow="geolocation; microphone; camera"></iframe>
        </div>
        <div class="out-webrtc">
          <div class="stop-conversition"
               @click="jumpList">结束对话</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCookie, setCookie } from '@utils/storage'
import http from '@utils/http'
export default {
  data() {
    return {
      canin: getCookie('canin'),
      Interval: null,
      count: 60 * 60 * 24,
      roomUrl: getCookie('room') + `?channel=PC&userid=${getCookie('userid')}&username=${getCookie('username')}&returnUrl=${encodeURIComponent(`${window.location.origin}/#/list`)}`,
      login_id: getCookie('login_id')
    }
  },
  created() {
    if (this.canin == 0) {
      this.jumpList()
    }
    this.checkRoom()
  },

  mounted() {
    if (window.history && window.history.pushState) {
      window.addEventListener('popstate', this.goBack, false)
    }
    setCookie('canin', 0)
  },
  destroyed() {
    window.removeEventListener('popstate', this.goBack, false)
    clearInterval(this.Interval)
    this.fresh()
    this.jumpList()
  },
  methods: {
    goBack() {
      this.fresh()
      this.jumpList()
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
    jumpList() {
      this.$router.push({
        path: 'list',
        query: this.$route.query
      })
    },
    // 用户端如果刷新页面，则坐席端跳转到列表
    checkRoom() {
      this.Interval = setInterval(async () => {
        this.count = this.count - 1
        if (this.count <= 0) {
          clearInterval(this.Interval)
        } else {
          this.query()
        }
      }, 2000)
    },
    query() {
      http.ask({
        url: 'inner/query',
        method: 'post',
        data: {
          login_id: '1',
          user_id: getCookie('userid')
        }
      }).then(res => {
        if (res) {
          const room = res[0].room
          console.log(room)
          if (!room) {
            this.$message('用户端房间号已过期')
            clearInterval(this.Interval)
            this.jumpList()
          }
        }
      }).catch((err) => {
        clearInterval(this.Interval)
        console.log(err)
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../styles/room.scss";
</style>
