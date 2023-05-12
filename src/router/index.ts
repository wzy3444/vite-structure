import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IconView from '../views/iconView.vue'
import TableTest from '../views/tableTest.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: () => import('@/components/echarts/CartTable.vue')
    },
    {
      path: '/table',
      name: 'table',
      component: TableTest
    },
    {
      path: '/icon',
      name: 'icon',
      component: IconView
    }
  ]
})

export default router
