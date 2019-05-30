// 按需加载
import {
  Pagination,
  Message,
  Button,
  Input,
  Form,
  FormItem,
  Table,
  Dialog,
  TableColumn
} from 'element-ui'

// eslint-disable-next-line no-undef
Vue.use(Pagination)
  .use(Button)
  .use(Input)
  .use(Form)
  .use(FormItem)
  .use(Table)
  .use(Dialog)
  .use(TableColumn)
// eslint-disable-next-line no-undef
Vue.prototype.$message = Message
