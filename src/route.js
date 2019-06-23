import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './view/home.vue'
import singleBlog from './view/singleBlog.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: home },
    { path: '/blog/:id', component: singleBlog },
  ]

export const router = new VueRouter( {
    routes
}
)