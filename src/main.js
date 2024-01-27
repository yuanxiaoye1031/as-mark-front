import { createApp } from 'vue'
import App from './App.vue'

// 引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入pinia
import { createPinia } from 'pinia'

// 引入router
import router from './router/index'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)

const pinia = createPinia()
app.use(pinia)

app.mount('#app')
