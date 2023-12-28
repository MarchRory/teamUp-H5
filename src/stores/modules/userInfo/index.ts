import { defineStore } from "pinia";
import { userInfoType, tokenStorageType } from "../types/user";
import { logoutAPI } from "@/api/requestAPI/user";

const useUserStore = defineStore('useUserStore', {
    state: (): userInfoType => {
        return {
            token: '',
            expireTime: 0,
        }
    },
    actions: {
        setTokenCache({ token, expireTime }: tokenStorageType) {
            this.token = token
            this.expireTime = expireTime
        },
        isTokenEffective() {
            let now = new Date().getTime();
            return now < this.expireTime
        },
        logout() {
            return new Promise((resolve, reject) => {
                logoutAPI()
                    .then(() => {
                        resolve(true);
                    }).catch((err) => {
                        reject(err);
                    })
            })
        }
    },
})

export default useUserStore