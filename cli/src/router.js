import Vue from 'vue';

//router
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HelloWorld from '@/views/HelloWorld.vue'
import Testing from '@/views/Testing.vue'
import Exercise from '@/views/Exercise.vue'
import Detail from '@/views/Detail.vue'
import ShoppingCart from '@/views/ShoppingCart.vue'
import OrderList from '@/views/OrderList.vue'


const router = new VueRouter({
  routes: [
  { path: '/',
   component: HelloWorld
   },
   { path: '/testing',
   component: Testing
   },
   { path: '/exercise',
   component: Exercise
   },
   { path: '/deatil/:id',
   name: 'detail',
   component: Detail
   },
   { path: '/cart',
   name: 'cart',
   component: ShoppingCart
   },
   { path: '/orders',
   name: 'order',
   component: OrderList
   },
  ],
  mode: 'history' //abstract
});

export default router