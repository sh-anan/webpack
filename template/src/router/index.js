import Vue from 'vue'
import Router from 'vue-router'
import getToken from '@/pages/getToken/getToken'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'getToken',
    },
    {
      path: '/getToken',
      component: getToken,
      meta: {
        title: '授权'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '未定义标题'
  next()
})

export default router
