import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DetailArticle from '@/components/DetailArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/:id',
      name: 'DetailArticle',
      component: DetailArticle
    }
  ]
})
