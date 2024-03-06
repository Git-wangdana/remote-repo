import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia

// 将Modules文件夹下的所有模块引入然后导出
export * from './modules/user'
export * from './modules/counter'
