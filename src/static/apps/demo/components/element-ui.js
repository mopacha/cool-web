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
  TableColumn,
  Menu,
  MenuItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Scrollbar,
  Submenu,
  Breadcrumb,
  BreadcrumbItem,
  Radio,
  Checkbox,
  Select,
  Option,
  Card
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
  .use(Menu)
  .use(MenuItem)
  .use(Dropdown)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Scrollbar)
  .use(Submenu)
  .use(Breadcrumb)
  .use(BreadcrumbItem)
  .use(Radio)
  .use(Checkbox)
  .use(Select)
  .use(Option)
  .use(Card)

// eslint-disable-next-line no-undef
Vue.prototype.$message = Message
