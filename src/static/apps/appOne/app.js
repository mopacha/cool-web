'use strict'
import Vue from 'vue'
import App from './app.vue'
import router from './routes'

import {
  Button,
  Select,
  Loading,
  Dialog,
  Input,
  Form,
  Table,
  Pagination,
  Dropdown
} from 'element-ui'

Vue.use(Button)
  .use(Select)
  .use(Loading)
  .use(Dialog)
  .use(Input)
  .use(Form)
  .use(Table)
  .use(Pagination)
  .use(Dropdown)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
