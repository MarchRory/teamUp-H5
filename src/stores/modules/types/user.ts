export interface tokenStorageType {
    token: string,
    expireTime: number
}

interface userBaseInfo { }

export type userInfoType = tokenStorageType & userBaseInfo