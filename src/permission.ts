import router from "./router";
import { userStore } from "./store/user";
import { menuStore } from "./store/menu";

router.beforeEach(async (to, from, next) => {
    let hasToken = userStore().getAccessToken
    if (hasToken) {
      if (userStore().getRoles.length === 0) {
        try {
          await userStore().setUserInfo()
        } catch (e) {
          userStore().resetUserInfo()
        }
        next({ ...to, replace: true })
      }
      if (menuStore().getMenus.length === 0) {
        try {
          await menuStore().generateRoutes()
        } catch (e) {
          menuStore().resetMenu()
        }
        next({ ...to, replace: true })
      }
      if (to.path === '/login') {
        next({ path: '/' })
      } else {
        next()
      }
    } else {
      if (to.path === '/login') {
        next()
      } else {
        next(`/login?redirect=${ to.path }`)
      }
    }
  }
)
