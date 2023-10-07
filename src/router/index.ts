import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Form',
    component: () => import(/* webpackChunkName: "form" */ '@/views/form/index.vue'),
  },
  {
    path: '/preview',
    name: 'Preview',
    component: () => import(/* webpackChunkName: "preview" */ '@/views/preview/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
