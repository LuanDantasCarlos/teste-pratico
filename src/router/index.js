import Vue from 'vue'
import VueRouter from 'vue-router'
import payPage from '../views/payPage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'payPage',
        component: payPage
    },
]