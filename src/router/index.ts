import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Identify from '@/views/Indentity/index.vue'
import Layout from '@/layout/index.vue'
export const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "identity",
        component: Identify,
    },
    {
        path: '/main',
        name: "layout",
        component: Layout,
        redirect: "/home",
        children: [{
            path: '/home',
            name: 'home',
            component: () => import('@/views/home/index.vue'),
            meta: {
                tab: '首页',
                index: 1,
                icon: 'i-tabler:brand-google-home'
            }
        }, {
            path: '/article',
            name: 'article',
            component: () => import('@/views/article/index.vue'),
            meta: {
                tab: '文章',
                index: 1,
                icon: 'i-tabler:align-box-left-stretch'
            }
        }, {
            path: '/posts',
            name: 'posts',
            component: () => import('@/views/posts/index.vue'),
            meta: {
                tab: '广场',
                index: 1,
                icon: 'i-tabler:brand-planetscale'
            }
        }, {
            path: '/chat',
            name: 'chat',
            component: () => import('@/views/chat/index.vue'),
            meta: {
                tab: '消息',
                index: 1,
                icon: "i-tabler:message-chatbot"
            }
        }, {
            path: '/user',
            name: 'user',
            component: () => import('@/views/user/index.vue'),
            meta: {
                tab: '我',
                index: 1,
                icon: "i-tabler:user-pentagon"
            }
        }]
    }, {
        path: "/404",
        name: "404",
        component: () => import("@/views/404/index.vue")
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})
