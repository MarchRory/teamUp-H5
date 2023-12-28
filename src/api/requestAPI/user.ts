import request from '@/utils/axios/axios'

const schema = 'user/front'
enum userAPI {
    logout = `${schema}/logout`
}

/**
 * 退出登录
 * @returns 
 */
export async function logoutAPI() {
    return await request.post({
        url: userAPI.logout
    })
}