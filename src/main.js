import { createApp } from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

VueRouter.use(VueRouter);

const router = new VueRouter({
    path: '/cadastro',
    component: App
})


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

