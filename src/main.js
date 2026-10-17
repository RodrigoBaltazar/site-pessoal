import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

if (!document.querySelector('meta[name="viewport"]')) {
  const meta = document.createElement('meta')
  meta.name = 'viewport'
  meta.content = 'width=device-width, initial-scale=1.0'
  document.head.appendChild(meta)
}

const app = createApp(App)
app.use(router)
app.mount('#app')
