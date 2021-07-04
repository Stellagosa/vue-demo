import {getUserInfo, login} from "../api/user";
import {defineStore} from "pinia";
import {
    getAccessTokenFromLocalStorage,
    getRefreshTokenFromLocalStorage,
    removeAccessTokenFromLocalStorage,
    removeRefreshTokenFromLocalStorage,
    setAccessTokenInLocalStorage,
    setRefreshTokenInLocalStorage
} from "../utils/localStorage";
import {menuStore} from "./menu";

export const userStore = defineStore({
    id: 'loginStore',
    state: (): userInfo => {
        return {
            access_token: getAccessTokenFromLocalStorage(),
            refresh_token: getRefreshTokenFromLocalStorage(),
            username: '',
            nickname: '',
            avatar: '',
            introduction: '',
            roles: []
        }
    },
    getters: {
        getAccessToken(): string {
            return this.access_token as string
        },
        getRefreshToken(): string {
            return this.refresh_token as string
        },
        getRoles(): string[] {
            return this.roles as string[]
        }
    },
    actions: {
        setAccessToken(access_token: string) {
            this.access_token = access_token
        },
        setRefreshToken(refresh_token: string) {
            this.refresh_token = refresh_token
        },
        setUsername(username: string) {
            this.username = username
        },
        setNickname(nickname: string) {
            this.nickname = nickname
        },
        setAvatar(avatar: string) {
            this.avatar = avatar
        },
        setIntroduction(introduction: string) {
            this.introduction = introduction
        },
        setRoles(roles: string[]) {
            this.roles = (<any>roles)
        },
        resetToken() {
            this.access_token = ''
            this.refresh_token = ''
            removeAccessTokenFromLocalStorage()
            removeRefreshTokenFromLocalStorage()
        },
        resetUserInfo() {
            this.username = ''
            this.nickname = ''
            this.avatar = ''
            this.introduction = ''
            this.roles = []
        },
        userLogin(loginForm: LoginForm) {
            return this.login(loginForm).then(() => {
                this.setUserInfo()
                menuStore().generateRoutes()
                return true
            }).catch(() => {
                this.resetUserInfo()
                this.resetToken()
                menuStore().resetMenu()
                return false
            })
        },

        login(loginForm: LoginForm) {
            return login(loginForm).then(result => {
                const {access_token, token_type, refresh_token} = result.data
                let accessToken = token_type + ' ' + access_token
                let refreshToken = token_type + ' ' + refresh_token
                this.setAccessToken(accessToken)
                this.setRefreshToken(refreshToken)
                setAccessTokenInLocalStorage(accessToken)
                setRefreshTokenInLocalStorage(refreshToken)
            }).catch(error => {
                this.resetToken()
                return Promise.reject(error)
            })
        },
        setUserInfo() {
            return getUserInfo().then(result => {
                const {username, nickname, avatar, introduction, roles} = result.data
                this.setUsername(username)
                this.setNickname(nickname)
                this.setAvatar(avatar)
                this.setIntroduction(introduction)
                this.setRoles(roles)
            }).catch(error => {
                this.resetToken()
                this.resetUserInfo()
                console.log(error)
            })
        }
    }
})

