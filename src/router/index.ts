import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import SearchView from "../views/SearchView.vue";
import PokemonView from "../views/PokemonView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/pesquisa",
    name: "search",
    component: SearchView,
  },
  {
    path: "/pokemon/:id",
    name: "pokemon",
    component: PokemonView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
