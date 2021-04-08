import Vue from 'vue'
import App from './App.vue'
import '../../../gg-config/css/main.scss'
Vue.config.productionTip = false
import './public-path'
// 微应用创建
let instance: any
const __qiankun__ = window.__POWERED_BY_QIANKUN__
export async function bootstrap(props: any) {
  console.log('nav', props)
  const { Scrollbar, Menu, Submenu, MenuItem, MenuItemGroup } = props
  Vue.use(Scrollbar)
  Vue.use(Menu)
  Vue.use(Submenu)
  Vue.use(MenuItem)
  Vue.use(MenuItemGroup)
}

export async function mount(props?: any) {
  const { container } = props
  instance = new Vue({
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

export async function unmount() {
  instance.$destroy()
  instance = null
}

// 单独开发环境
__qiankun__ || mount()
