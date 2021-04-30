import { createRouter, createWebHistory } from "vue-router"
import RecipePage from "../views/RecipePage.vue"

const routes = [
  {
    path: "/",
    name: "RecipePage",
    component: RecipePage
  },
  {
    path: "/add-recipe",
    name: "AddRecipe",

    component: () => import(/* webpackChunkName: "add-recipe" */ "@/views/AddRecipe.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
