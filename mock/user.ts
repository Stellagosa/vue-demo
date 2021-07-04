import {MockMethod} from "vite-plugin-mock";
import { requestParams, resultError, resultSuccess } from "./util";

export default [
    {
        url: '/mock/login',
        method: 'post',
        response: ({body}:requestParams) => {
            return resultSuccess({
                access_token: 'e9c07170-fb16-4c20-a4cb-71fd623ccffb',
                token_type: 'bearer',
                refresh_token: 'a9c07570-ec16-8a92-4839-28f40536cabe',
                expires_in: 42596,
                scope: 'all'
            })
            // return resultError('登录失败')
        }
    },
    {
        url: '/mock/user/info',
        method: 'get',
        response: ({body}:requestParams) => {
            return resultSuccess({
                username: 'zhangsan',
                nickname: '小三',
                avatar: 'asdas',
                introduction: '阿萨大大实打实大苏打',
                roles: ['101', '102']
            })
            // return resultError('获取个人信息失败')
        }
    },
] as MockMethod[]

