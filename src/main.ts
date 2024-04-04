import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import  store from '@/store/index'
import route from './router'
import router from "@/router";

const app = createApp(App)
app.use(ElementPlus)
app.use(route)
app.use(store)
app.use(router)
app.config.globalProperties.$router =router
app.config.globalProperties.$store =store
app.mount('#app')

