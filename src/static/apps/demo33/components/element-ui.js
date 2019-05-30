// 按需加载
import {
  Card,
  Pagination,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Message,
  Button,
  Input,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Radio,
  RadioGroup,
  RadioButton,
  Select,
  Option,
  Table,
  TableColumn,
  Tooltip,
  Dialog
} from 'element-ui'

// eslint-disable-next-line no-undef
Vue.use(Menu)
  .use(Card)
  .use(Submenu)
  .use(MenuItem)
  .use(MenuItemGroup)
  .use(Pagination)
  .use(Button)
  .use(Input)
  .use(Form)
  .use(FormItem)
  .use(Tabs)
  .use(TabPane)
  .use(Radio)
  .use(RadioGroup)
  .use(RadioButton)
  .use(Select)
  .use(Option)
  .use(Table)
  .use(TableColumn)
  .use(Tooltip)
  .use(Dialog)
// eslint-disable-next-line no-undef
Vue.prototype.$message = Message
