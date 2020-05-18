import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IfFor from '@/components/IfFor'
import method from '@/components/Method'
import css from '@/components/Css'
import cmd from '@/components/Cmd'
import CallBackData from '@/components/CallBackData'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/IfFor',
      name: 'IfFor',
      component: IfFor
    },
    {
      path: '/method',
      name: 'method',
      component: method
    },
    {
      path: '/css',
      name: 'css',
      component: css
    },
    {
      path: '/cmd',
      name: 'cmd',
      component: cmd
    },
    {
      path: '/callbackdata',
      name: 'callbackdata',
      component: CallBackData
    }
  ]
})
