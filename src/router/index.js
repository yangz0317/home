import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/page/HomePage'
import ContentPage from '@/page/ContentPage'
import AboutusPage from '@/page/AboutusPage'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/contentpage',
      name: 'ContentPage',
      component: ContentPage
    },
    {
      path: '/aboutuspage',
      name: 'AboutusPage',
      component: AboutusPage
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
