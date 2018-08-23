import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import City from './views/City/City.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }]
})
