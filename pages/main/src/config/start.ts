import { list, OrderItem } from './utils'
import {
  registerMicroApps, // 注册子应用方法
  runAfterFirstMounted, // 有个子应用加载完毕回调
  start // 启动qiankun
} from 'qiankun'
const qianKunStart = (list: OrderItem[]) => {
  registerMicroApps(list, {
    beforeLoad: [
      (app) => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name)
        return Promise.resolve()
      }
    ],
    beforeMount: [
      (app) => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
        return Promise.resolve()
      }
    ],
    afterUnmount: [
      (app) => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
        return Promise.resolve()
      }
    ]
  })
  runAfterFirstMounted(() => {
    console.log('第一个加载')
  })
  start()
}
const startApp = () => {
  qianKunStart(list)
}
export default startApp
