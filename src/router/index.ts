import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  // 注意它这边是history模式，你手动跳转的时候不要#/（直接/router）,不然永远挑不出来。
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Show',
      component: () => import("@/views/show/Index.vue"),
      children: [
        {
          path: 'home',
          name: 'Showhome',
          component: () => import("@/views/show/Home.vue")
        },
        {
          path: 'about',
          name: 'Showabout',
          component: () => import("@/views/show/About.vue")
        }
      ]
    }
  ]
})

export default router
