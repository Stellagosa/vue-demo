import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/login',
    name: '登陆页面',
    meta: {
      hidden: true
    },
    component: () => import('@/view/login/index.vue')
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/default/index.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: 'Dashboard',
          icon: 'el-icon-s-platform',
          affix: true
        },
        component: () => import('@/view/dashboard/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
