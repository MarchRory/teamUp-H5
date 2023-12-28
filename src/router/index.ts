import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
export const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "identity",
        component: () => import("@/views/Indentity/index.vue"),
    },
    {
        path: '/main',
        name: "layout",
        component: () => import("@/layout/index.vue"),
        redirect: "/home",
        children: [{
            path: '/home',
            name: 'home',
            component: () => import('@/views/home/index.vue'),
            meta: {
                tab: '首页',
                index: 1
            }
        }]
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})
