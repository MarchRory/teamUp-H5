import { router } from "./router"
import { checkToken, removeToken } from "./utils/token"
import NProgress from "nprogress"   // 路由加载时候的进度条
import getPageTitle from "./utils/pageTitle"
import useUserStore from '@/stores/modules/userInfo/index'
import { showNotify } from "vant"
import { RouteLocationNormalized } from "vue-router"
var userStore: any

NProgress.configure({ showSpinner: false })

const whiteList = ['/']

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: Function) => {
    NProgress.start()
    document.title = getPageTitle(to.meta.title as string | undefined)
    const isEffective = checkToken()
    if (!userStore) userStore = useUserStore()
    // 目标路由在白名单或者token有效, 就直接跳转
    if (whiteList.includes(to.path) || isEffective) {
        next()
    }
    if (!isEffective && userStore.token) {
        let msg = '登录过期, 请重新登陆'
        showNotify({ type: 'danger', message: msg })
        userStore.logout()
            .then(() => { },
                (err) => {
                    showNotify({
                        type: "danger",
                        message: "服务器异常"
                    })
                    console.error(err)
                })
            .finally(() => {
                userStore.$reset()
                removeToken()
                next(`/?redirect=${to.path}`)
            })
    }
    NProgress.done()
})

router.afterEach(() => {
    NProgress.done()
})
