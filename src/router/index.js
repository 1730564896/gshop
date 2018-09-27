/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'


//声明使用路由插件
Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/profile',
      component:Profile
    }
  ]
})
