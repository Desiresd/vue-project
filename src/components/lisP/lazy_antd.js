/**
 * 按需加载antd组件
 */
import Vue from 'vue'

// base library
import {
  Affix,
  Anchor,
  AutoComplete,
  Alert,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Collapse,
  Comment,
  Carousel,
  Cascader,
  Checkbox,
  Col,
  ConfigProvider,
  DatePicker,
  Divider,
  Dropdown,
  Empty,
  Form,
  FormModel,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  LocaleProvider,
  message,
  Menu,
  Mentions,
  Modal,
  notification,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Spin,
  Statistic,
  Steps,
  Switch,
  Table,
  Transfer,
  Tree,
  TreeSelect,
  Tabs,
  Tag,
  TimePicker,
  Timeline,
  Tooltip,
  Upload,
  Drawer,
  Skeleton,
  Result,
  Descriptions,
  PageHeader,
  Space
} from 'ant-design-vue'
// import Viser from 'viser-vue'
Vue.use(Affix)
Vue.use(Anchor)
Vue.use(LocaleProvider)
Vue.use(Mentions)
Vue.use(AutoComplete)
Vue.use(BackTop)
Vue.use(Calendar)
Vue.use(ConfigProvider)
Vue.use(Comment)
Vue.use(Space)
Vue.use(Timeline)
Vue.use(Layout)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Select)
Vue.use(Card)
Vue.use(Form)
Vue.use(Row)
Vue.use(Col)
Vue.use(Modal)
Vue.use(Table)
Vue.use(Tabs)
Vue.use(Icon)
Vue.use(Badge)
Vue.use(Popover)
Vue.use(Dropdown)
Vue.use(List)
Vue.use(Avatar)
Vue.use(Breadcrumb)
Vue.use(Steps)
Vue.use(Spin)
Vue.use(Menu)
Vue.use(Drawer)
Vue.use(Tooltip)
Vue.use(Alert)
Vue.use(Tag)
Vue.use(Divider)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Upload)
Vue.use(Progress)
Vue.use(Skeleton)
Vue.use(Popconfirm)
Vue.use(PageHeader)
Vue.use(Result)
Vue.use(Statistic)
Vue.use(Descriptions)
Vue.use(Empty)
Vue.use(Tree)
Vue.use(TreeSelect)
Vue.use(Carousel)
Vue.use(Pagination)
Vue.use(FormModel)
Vue.use(Cascader)
Vue.use(Slider)
Vue.use(Transfer)
Vue.use(Rate)
Vue.use(Collapse)

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning

process.env.NODE_ENV !== 'production' &&
  console.warn('[jeecg-boot-vue] NOTICE: Antd use lazy-load.')
