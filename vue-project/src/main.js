import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'
import App from './App.vue'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')

const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
  })

  createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')
