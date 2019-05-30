<template>
  <div id="app">
    <loading v-if="isLoading"></loading>
    <router-view />
  </div>
</template>

<script>

import Loading from '@components/loading'
import { mapGetters } from 'vuex'
export default {
  components: {
    Loading
  },
  name: 'App',
  computed: {
    ...mapGetters([
      'isLoading'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "./styles/app/index.scss";
</style>
