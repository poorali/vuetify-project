import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home.vue";
import Implementation from "@/pages/Implementation.vue";
import SecondImplementation from "@/pages/SecondImplementation/SecondImplementation.vue";
import Instructions from "@/pages/Instructions.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/instructions', component: Instructions },
  { path: '/implementation', component: Implementation },
  { path: '/implementation2', component: SecondImplementation },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
