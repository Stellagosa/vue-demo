import { defineStore } from "pinia";
import { getMenu } from "../api/user";
import router from "../router";
import { formatRoutes } from "../utils/routerUtils";

export const menuStore = defineStore({
  id: 'menuStore',
  state: (): { menus: Menu[] } => {
    return {
      menus: []
    }
  },
  getters: {
    getMenus(): Menu[] {
      return this.menus
    }
  },
  actions: {
    setMenus(menus: Menu[]) {
      this.menus = menus
    },
    resetMenu() {
      this.menus = []
    },
    generateRoutes() {
      return getMenu().then(result => {
        let menu = result.data.menu
        let routes = formatRoutes(menu)
        menu.unshift({
          path: '/dashboard',
          name: 'dashboard',
          meta: {
            title: 'Dashboard',
            icon: 'el-icon-s-platform',
            affix: true
          },
          redirect: '',
          component: 'dashboard/index.vue',
          children: []
        })
        this.setMenus(menu)
        routes = routes.filter(route => {
          return !router.getRoutes().find(item => {
            return item.name === route.name
          })
        })
        routes.forEach(item => {
          router.addRoute('Layout', item)
        })
        if (!router.getRoutes().find(item => {
          return item.name === '404'
        })) {
          router.addRoute('Layout', {
            path: '/404',
            name: '404',
            component: () => import('@/view/error-page/404.vue')
          })
        }
        if (!router.getRoutes().find(item => {
          return item.name === '*'
        })) {
          router.addRoute({
            path: '/:W+',
            name: '*',
            redirect: {
              path: '/404'
            }
          })
        }
      })
    }
  }
})
