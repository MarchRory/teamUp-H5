import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index'
import stores from './stores/index'
import './auth'
import './styles/index.css'
import './style.css'
import "virtual:uno.css"
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import 'vant/es/notify/style';
import 'vant/es/image-preview/style';
import { Toast } from "vant";
import { Notify } from "vant";

createApp(App)
    .use(router)
    .use(stores)
    .use(Toast)
    .use(Notify)
    .mount('#app')
