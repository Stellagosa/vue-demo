import axios from "axios";
import { ElMessage } from "element-plus";
import { userStore } from "../store/user";

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  withCredentials: true,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    if (userStore().getAccessToken) {
      config.headers['Authorization'] = userStore().getAccessToken
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const { data, status } = response
    if (status != 200) {
      if (status == 401) {
        console.log('未登录')
      } else if (status == 404) {
        console.log('页面不存在')
      } else if (status == 500) {
        console.log('服务器错误')
      } else {
        console.log('其他错误')
      }
    } else {
      if (data.success) {
        return data
      } else {
        ElMessage({
          type: 'error',
          message: data.message
        })
        return Promise.reject(data.message)
      }
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
