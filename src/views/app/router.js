import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const Foo = () => import('./pages/Foo.vue')

export default new VueRouter({
  routes: [
    {
      path: '/foo', component: Foo
    }]
})
