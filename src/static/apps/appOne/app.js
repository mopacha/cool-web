'use strict'
import Vue from 'vue'
import App from './app.vue'
import router from './routes'

import Icon from '@/@cool/svg-icon/Icon'
import {
  Form,
  FormItem,
  Button,
  Select,
  Loading,
  Dialog,
  Input,
  Table,
  Pagination,
  Dropdown,
  Card
} from 'element-ui'

Vue.use(Form)
  .use(FormItem)
  .use(Button)
  .use(Select)
  .use(Loading)
  .use(Dialog)
  .use(Input)
  .use(Table)
  .use(Pagination)
  .use(Dropdown)
  .use(Card)

Vue.component('icon', Icon)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
