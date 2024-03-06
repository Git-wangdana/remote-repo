import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'

// createRouter 创建路由实例
// 配置： history 模式
// 1.history模式：createWebHistory  地址栏不带 #
// 2.hash模式：   createWebHashHistory 地址栏带 #

// vite 中的环境变量 import.meta.env.BASE_URL 指代的就是 vite.config.js 中的 base 配置项
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/loginPage.vue') },
    {
      path: '/',
      component: () => import('@/views/layout/layoutContainer.vue'),
      redirect: '/article/manage',
      children: [
        {
          path: '/article/manage',
          component: () => import('@/views/article/articleManage.vue')
        },
        {
          path: '/article/channel',
          component: () => import('@/views/article/articleChannel.vue')
        },
        {
          path: 'user/profile',
          component: () => import('@/views/user/userProfile.vue')
        },
        {
          path: 'user/avatar',
          component: () => import('@/views/user/userAvatar.vue')
        },
        {
          path: 'user/password',
          component: () => import('@/views/user/userPassword.vue')
        }
      ]
    }
  ]
})

export default router
