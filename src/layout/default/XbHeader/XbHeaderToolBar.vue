<template>
  <div class="xb-header-tool-bar">
    <div class="xb-header-tool-item">
      <el-image src="public/setting.svg"/>
    </div>
    <div class="xb-header-tool-item">
      <el-dropdown trigger="hover">
        <el-image src="public/user-male.svg"/>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handlerUserInfo">个人信息</el-dropdown-item>
            <el-dropdown-item @click="handlerLogout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import {userStore} from "../../../store/user";
import {scrollBarStore} from "../../../store/scrollbar";
import {ElMessage, ElMessageBox} from "element-plus";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "XbHeaderToolBar",
  setup() {
    const router = useRouter()
    const handlerUserInfo = () => {
      router.push('/user-info')
    }
    const handlerLogout = () => {
      ElMessageBox({
        title: '提示',
        message: '是否退出当前登录?',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton: true,
        closeOnClickModal: false,
        type: 'warning'
      }).then(() => {
        userStore().resetToken()
        userStore().resetUserInfo()
        scrollBarStore().resetBar()
        router.push('/login')
        ElMessage({
          type: 'success',
          message: '退出登录!'
        });
      }).catch(() => {
        ElMessage({
          type: 'info',
          message: '已取消退出登录！'
        });
      });
    }

    return {
      handlerUserInfo,
      handlerLogout
    }
  }
})
</script>

<style lang="scss" scoped>
.xb-header-tool-bar {
  width: 100px;

  .xb-header-tool-item {
    margin: 0 10px;
    float: right;
    width: 30px;
    height: 30px;
    text-align: center;

    .el-image {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
