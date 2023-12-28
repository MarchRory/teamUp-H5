import { createApp } from 'vue'
import './styles/index.css'
import './style.css'
import "virtual:uno.css"
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import 'vant/es/notify/style';
import 'vant/es/image-preview/style';
import { router } from './router/index'
import './auth'
import stores from './stores/index'
import App from './App.vue'

createApp(App)
    .use(router)
    .use(stores)
    .mount('#app')
