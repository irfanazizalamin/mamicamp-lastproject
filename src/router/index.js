import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/PageHome'
import ThreadShow from '@/components/pages/PageThreadShow'
import PageNotFound from '@/components/pages/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true
    },
    {
      path: '*',
      name: 'Not Found',
      component: PageNotFound
    }
  ],
  mode: 'history'
})
