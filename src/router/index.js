import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
//import Home from '../views/Home.vue'

import { fetchDocument } from 'tripledoc';
import { vcard,  dct /* rdfs, foaf, ldp, acl */} from 'rdf-namespaces'
//import axios from 'axios';

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
    redirect: '/workspaces',
  },
  {
    path: '/backlog',
    name: 'Backlog',
    component: () => import(/* webpackChunkName: "backlog" */ '../views/Backlog.vue')
  },
  {
    path: '/board',
    name: 'Kanban',
    component: () => import(/* webpackChunkName: "kanban" */ '../views/KanbanBoard.vue')
  },
  {
    path: '/workspaces',
    name: 'Workspaces',
    component: () => import(/* webpackChunkName: "workspaces" */ '../views/Workspaces.vue')
  },
  {
    path: '/tables',
    name: 'Tables',
    component: () => import(/* webpackChunkName: "tablesviews" */ '../views/TablesView.vue')
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import(/* webpackChunkName: "activity" */ '../views/Activity.vue')
  },
  {
    path: '/fields',
    name: 'Fields',
    component: () => import(/* webpackChunkName: "fields" */ '../views/Fields.vue')
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
  {
    path: '/bases',
    name: 'Bases',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "bases" */ '../views/BasesView.vue')
  },
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



router.beforeEach(async function(to, from, next)  {
  //console.log("route",to, from, next)
  // let city = ""
  // axios.get('https://ipapi.co/json/')
  // .then(function (response) {
  //   // handle success
  //   //  console.log("RESP",JSON.stringify(response, null, 2));
  //   city = response.data.city
  //   //     console.log("city", city)
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log("ERR",error);
  // })
  // .then(async function () {
  //   //   console.log("DONE")
  //   // always executed

    var dateObj = new Date();
    var date = dateObj.toISOString()
    let log="https://spoggy.solidweb.org/private/logs/log-ess.ttl"
    // let w_l = window.location.toString()
    let logDoc = await fetchDocument(log)
    let subj = logDoc.addSubject()
    // console.log("subj",subj)
    subj.addString(dct.created, date)
    subj.addRef(vcard.fn, store.state.solid.webId)
    subj.addString("https://schema.org/url_to", to.path)
    subj.addString("https://schema.org/url_from", from.path)
  //  subj.addString("https://schema.org/location", city)
    logDoc.save()

    next()
    /*
    var ip = '208.67.222.222'
    $.get('https://ipapi.co/'+ip+'/latlong/', function(response){
    var latlong = response.split(',');
    console.log(latlong);
    $.get('http://api.openweathermap.org/data/2.5/weather?lat=' + latlong[0] + '&lon=' + latlong[1] + '&appid=API_KEY', function(wResponse){
    console.log(weather);
  })
})*/
//});


})
