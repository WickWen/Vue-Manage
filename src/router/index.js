import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

import ArticleList from '../views/ArticleList.vue'
import EditPage from '../views/EditPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: '首页',
    children: [
      {
        // 配置嵌入到主页的组件,子路由 path 不用加/
        path: 'articlelist',
        meta:'文章列表',
        component: ArticleList
      },
      {
        path: 'editpage',
        meta: '发布文章',
        component: EditPage
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
