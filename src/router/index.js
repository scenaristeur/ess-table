import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import(/* webpackChunkName: "backlog" */ '../views/Backlog.vue')
  // },
  {
    path: '/',
    name: 'Backlog',
    alias: '/backlog',
    component: () => import(/* webpackChunkName: "backlog" */ '../views/Backlog.vue')
  },
  // {
  //   path: '*',
  //   redirect: '/backlog',
  // },
  {
    path: '/board',
    name: 'Kanban',
    component: () => import(/* webpackChunkName: "kanbanboard" */ '../views/KanbanBoard.vue')
  },
  // {
  //   path: '/workspaces',
  //   name: 'Workspaces',
  //   component: () => import(/* webpackChunkName: "tablesviews" */ '../views/WorkspacesView.vue')
  // },
  {
    path: '/tables',
    name: 'Tables',
    component: () => import(/* webpackChunkName: "tablesviews" */ '../views/TablesView.vue')
  },
  // {
  //   path: '/pod',
  //   name: 'Pod',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "pod" */ '../views/Pod.vue')
  // },
  // {
  //   path: '/browser',
  //   name: 'Browser',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "browser" */ '../views/Browser.vue')
  // },
  // {
  //   path: '/workspaces',
  //   name: 'Workspaces',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "workspaces" */ '../views/Workspaces.vue')
  // },
  // {
  //   path: '/workspace',
  //   name: 'Workspace',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "workspace" */ '../views/Workspace.vue')
  // },
  // {
  //   path: '/base',
  //   name: 'Base',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "base" */ '../views/Base.vue')
  // },
  // {
  //   path: '/table',
  //   name: 'Table',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "table" */ '../views/Table.vue')
  // },
  {
    path: '/templates',
    name: 'Templates',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "templates" */ '../views/Templates.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })
const publicPath = process.env.NODE_ENV === 'production' ? '/ess-table' : ''
const router = new VueRouter({
  routes, mode: 'history', base: publicPath,  linkActiveClass: 'active'
})

export default router
