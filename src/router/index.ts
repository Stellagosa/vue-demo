import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登陆页面',
      icon: '',
      affix: false,
      hidden: true
    },
    component: () => import('@/view/login/index.vue')
  },
  {
    path: '/',
    name: 'Layout',
    meta: {
      title: '布局页面',
      icon: '',
      affix: false,
      hidden: true
    },
    component: () => import('@/layout/default/index.vue'),
    redirect: '/dashboard',
    children: []
  }
]

// 添加到route的Layout下的
export const additionLayoutRoute = [
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      title: 'Dashboard',
      icon: 'el-icon-s-platform',
      affix: true,
      hidden: false
    },
    component: () => import('@/view/dashboard/index.vue')
  },
  {
    path: '/user-info',
    name: 'user-info',
    meta: {
      title: '个人信息',
      icon: '',
      affix: false,
      hidden: true
    },
    component: () => import('@/view/user-info/index.vue')
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404错误页面',
      icon: '',
      affix: false,
      hidden: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]

// 添加到route中的
export const additionRoutes = [
  {
    path: '/:W+',
    name: '*',
    meta: {
      affix: false,
      hidden: true
    },
    redirect: {
      path: '/404'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
