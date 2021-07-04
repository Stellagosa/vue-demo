<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-form">
        <div class="login-form-login-label">登录</div>
        <el-form>
          <el-form-item>
            <el-input v-model="loginForm.username" clearable placeholder="username"/>
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginForm.password" clearable placeholder="password" show-password/>
          </el-form-item>
          <el-form-item>
            <div class="login-form-btn-login">
              <el-button type="primary" @click="handlerLogin">登录</el-button>
            </div>
            <div class="login-form-btn-registry">
              <el-button type="primary" @click="handlerRegistry">注册</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <div class="login-link">
        <div class="login-link-left"></div>
        <div class="login-link-context">其他登录方式</div>
        <div class="login-link-right"></div>
      </div>
      <div class="login-third-login">
        <div class="login-third-login-item">
          <el-image src="public/wechat.svg"/>
          <div class="wechat-item-content">微信登录</div>
        </div>
        <div class="login-third-login-item">
          <el-image src="public/qq.svg"/>
          <div class="qq-item-content">QQ登录</div>
        </div>
      </div>
      <div class="login-forgot-password">
        <el-link>忘记密码？</el-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import {userStore} from "../../store/user";
import {ElMessage} from "element-plus";
import {useRoute, useRouter} from "vue-router";

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
        let path = route.query.redirect as string || '/dashboard'
        await router.push(path)
      }
      ElMessage({
        type: res ? 'success' : 'error',
        message: res ? '登录成功' : '登录失败'
      })
    }
    const handlerRegistry = () => {

    }
    return {
      loginForm,
      handlerLogin,
      handlerRegistry
    }
  }
})
</script>

<style lang="scss" scoped>
.login-page {
  height: 100%;
  width: 100%;
  background: url("public/login-bg-image.jpg") no-repeat center center;
  background-size: 100% 100%;

  .login-container {
    width: 280px;
    height: 300px;
    background-color: #eeeaea;
    position: absolute;
    top: 25%;
    right: 10%;
    padding: 50px;
    border: 1px solid #b3b9bf;
    border-radius: 20px 20px 10px 10px;

    .login-form {
      .login-form-login-label {
        text-align: center;
        font-size: 30px;
        margin-bottom: 20px;
      }

      .el-form {
        .el-form-item {
          margin-bottom: 20px;
          text-align: center;

          .el-button {
            font-size: 14px;
            width: 80%;
          }

          .login-form-btn-login {
            width: 50%;
            display: inline-block;
          }

          .login-form-btn-registry {
            width: 50%;
            display: inline-block;
          }
        }
      }
    }

    .login-link {
      margin-bottom: 20px;

      .login-link-context {
        font-size: 12px;
        color: rgba(0, 0, 0, .45);
        width: 30%;
        display: inline-block;
        text-align: center;
      }

      .login-link-left, .login-link-right {
        width: 35%;
        height: 3px;
        border-top: 1px solid #b3b9bf;
        display: inline-block;
      }
    }

    .login-third-login {
      text-align: center;
      margin-bottom: 20px;

      .login-third-login-item {
        margin: 0 20px;
        display: inline-block;
        text-align: center;
        .el-image {
          width: 30px;
          height: 30px;
        }
        .wechat-item-content, .qq-item-content {
          margin: 0;
          padding: 0;
          line-height: 12px;
          font-size: 12px;
          color: rgba(0, 0, 0, .45);
        }

      }
      .login-third-login-item:hover {
        transform: scale(1.1);
      }
    }

    .login-forgot-password {
      float: right;

      .el-link {
        font-size: 6px;
        color: rgba(0, 0, 0, .45);
      }
    }
  }
}
</style>
