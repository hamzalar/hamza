import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import home from './components/home.vue'
import about from './components/about.vue'
import contact from './components/contact.vue'
import user from './components/user.vue'
import hamza from './components/hamza.vue'
import bichri from './components/bichri.vue'

Vue.use(VueRouter);
const router =new VueRouter({
  mode:'history',
routes:[

  {path:"/home",component:home},
  {path:"/about",component:about},
  {path:"/contact",component:contact},
  {path:"/user",component:user,children:[
    {path:"/hamza",component:hamza},
    {path:"/bichri",component:bichri},
  ]},
  {path:"*",redirect:"/home"}
]

})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
