import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Login from './components/Login.vue'
import HelloWorld from './components/HelloWorld.vue'
import MainPage from './components/main/MainPage.vue'

const app=createApp(App)

app.component("Login",Login)
app.component("HelloWorld",HelloWorld)
app.component("MainPage",MainPage)

app.mount('#app')