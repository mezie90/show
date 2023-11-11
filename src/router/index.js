import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../components/home.vue'
import Cart from '../components/Cart.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
    ]
    
});

export default router
