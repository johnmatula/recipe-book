import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '@/components/Welcome.vue'
import Recipe from '@/components/Recipe.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/recipe/:id',
    name: 'Recipe',
    component: Recipe
  }
]

const router = new VueRouter({
  routes
})

export default router
