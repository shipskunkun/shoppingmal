import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Card from '@/views/Card'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'GoodsList',
      component: GoodsList,
      children: [{
      	path: 'title',
      	name: 'title',
      	component: Title,
      },
      {
      	path: 'image',
      	title: 'title',
      	component: Image,
      }]
    }, {
    	path: '/card',
    	name: 'card',
    	component: Card
    }
  ]
})
