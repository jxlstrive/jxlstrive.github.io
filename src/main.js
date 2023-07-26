import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

const app = createApp(App)

//app.use(）方法用来挂载"第三方的插件模块”
app.use(router);
app.mount('#app')
