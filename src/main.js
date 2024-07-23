import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            name: 'Main',
            path: '/',
            component: () => import("./pages/Main.vue")
        },
        {
            name: 'Info',
            path: '/info',
            component: () => import("./pages/Info.vue")
        },
        {
            name: 'Test',
            path: '/test',
            component: () => import("./pages/Test.vue")
        }
    ]
})

const app = createApp(App)
    .use(router)
    .mount('#app');

