import { createApp } from 'vue'
import App from './App.vue'
import Top from '@/components/top/index.vue'
import Bottom from '@/components/bottom/index.vue'

import MainPage from '@/components/main/MainPage.vue'

import router from '@/router'

import '~bootstrap/scss/bootstrap.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
 
//国际化文件
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app=createApp(App)
app.component('Top',Top)
app.component('Bottom',Bottom)
app.component('MainPage',MainPage)

//安装element-plus插件
app.use(ElementPlus, {
    locale: zhCn,
});


app.use(router);

app.mount('#app')