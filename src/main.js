import './assets/scss/main.scss'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router.js'

import { createApp } from 'vue'
import App from './_App.vue'

createApp(App).use(router).mount('#app')
