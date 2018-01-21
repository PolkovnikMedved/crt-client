import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Locations from '@/components/Locations'
import Requests from '@/components/Requests'
import Partner from '@/components/Partner'
import Partners from '@/components/Partners'
import PartnerType from '@/components/PartnerType'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/location/all',
      name: 'locations',
      component: Locations
    },
    {
      path: '/request/all',
      name: 'requests',
      component: Requests
    },
    {
      path: '/partner/all',
      name: 'partners',
      component: Partners
    },
    {
      path: '/partner/:id',
      name: 'partner',
      component: Partner
    },
    {
      path: '/partner-type/all',
      name: 'partner-types',
      component: PartnerType
    }
  ]
})
