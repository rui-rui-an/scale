import Vue from "vue"
import VueRouter from "vue-router"
import Layout from "@/layout"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    redirect: "/charts",
    children: [
      {
        path: "/search",
        name: "search",
        component: () => import("@/views/search"),
      },
      {
        path: "/charts",
        name: "search",
        meta: {
          showLeft: false,
        },
        component: () => import("@/views/charts"),
      },
      {
        path: "/other",
        name: "other",
        component: () => import("@/views/other"),
      },
    ],
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
