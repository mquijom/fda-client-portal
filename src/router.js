import Vue from 'vue'
import Router from 'vue-router'
import UserLayout from '@/layout/UserLayout'
import MainLayout from '@/layout/MainLayout'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainLayout,
      children:[
        {
          path:'',
          name:'Login',
          component: () => import ('@/views/Login.vue')
        }
      ]

    },
    {
      path: '/app',
      component: UserLayout,
      children:[
        {
          path:'',
          name:'Dashboard',
          component: () => import ('@/views/app/UserPortfolio.vue')
        },
        {
          path:'licenses',
          name:'Licenses',
          component: () => import ('@/views/app/licenses/Licenses.vue')
        },
        {
          path:'licenses/apply',
          name:'New License Application',
          component: () => import ('@/views/app/licenses/Apply.vue')
        },
        {
          path:'certificates',
          name:'Certificates',
          component: () => import ('@/views/app/UserPortfolio.vue')
        },
        {
          path:'payments',
          name:'Payments',
          component: () => import ('@/views/app/UserPortfolio.vue')
        },
      ]

    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
