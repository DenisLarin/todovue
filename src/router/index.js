import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "../views/Main";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/Create.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
