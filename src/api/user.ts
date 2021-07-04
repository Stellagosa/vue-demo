import request from "../utils/request";

enum Api {
    Login= '/login',
    GetUserInfo = '/user/info',
    GetMenu = '/menu/all'
}

interface httpResponse<T> {
    status: number,
    statusText: string,
    data: {
        code: number,
        msg: string,
        data: T
    }
}

export function login(data: LoginForm) {
    return request({
        url: Api.Login,
        method: 'post',
        data: data
    })
}

export function getUserInfo() {
    return request({
        url: Api.GetUserInfo,
        method: 'get',
    })
}

export function getMenu() {
    return request({
        url: Api.GetMenu,
        method: 'get'
    })
}
