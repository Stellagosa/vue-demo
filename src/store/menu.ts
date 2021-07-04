import {defineStore} from "pinia";
import {getMenu} from "../api/user";
import router, {additionLayoutRoute, additionRoutes} from "../router";
import {formatRoutes} from "../utils/routerUtils";
import {RouteRecordRaw} from "vue-router";

export const menuStore = defineStore({
  id: 'menuStore',
  state: (): { menus: RouteRecordRaw[] } => {
    return {
      menus: []
    }
  },
  getters: {
    getMenus(): RouteRecordRaw[] {
      return this.menus
    }
  },
  actions: {
    setMenus(menus: RouteRecordRaw[]) {
      this.menus = menus
    },
    resetMenu() {
      this.menus = []
    },
    generateRoutes() {
      return getMenu().then(result => {
        let menu = result.data.menu
        let routes = formatRoutes(menu)
        additionLayoutRoute.forEach(item => {
          routes.unshift(item)
        })

        this.setMenus(routes)

        //过滤掉路由中已经存在的
        routes = routes.filter(route => {
          return !router.getRoutes().find(item => {
            return item.name === route.name
          })
        })
        //添加到路由中
        routes.forEach(item => {
          router.addRoute('Layout', item)
        })

        routes = additionRoutes.filter(route => {
          return !router.getRoutes().find(item => {
            return item.name === route.name
          })
        })
        routes.forEach(item => {
          router.addRoute(item)
        })
      })
    }
  }
})
