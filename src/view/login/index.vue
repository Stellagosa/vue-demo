<template>
  <div class="login-container">
    <el-form>
      <el-input v-model="loginForm.username" clearable placeholder="username"/>
      <el-input v-model="loginForm.password" clearable placeholder="password" show-password/>
      <el-button type="primary" @click="handlerLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { userStore } from "../../store/user";
import { ElMessage } from "element-plus";
import router from "../../router";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: 'Home',
  setup: () => {
    const loginForm = reactive<LoginForm>({
      username: 'admin',
      password: '123456'
    })
    const loginStore = userStore()
    const route = useRoute()
    const router = useRouter()
    const handlerLogin = async () => {
      let res = await loginStore.userLogin(loginForm)
      if (res) {
        let path = route.query.redirect as string
        await router.push(path)
      }
      ElMessage({
        type: res ? 'success' : 'error',
        message: res ? '登录成功' : '登录失败'
      })
    }
    return {
      loginForm,
      handlerLogin
    }
  }
})
</script>
