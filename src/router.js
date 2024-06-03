import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory,
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/progetti',
            name: 'projects',
            component: Home
        },
        {
            path: '/chi-sono',
            name: 'about',
            component: Home
        },
        {
            path: '/patchMatch(.*)',
            name: 'error',
            component: Error404
        },
    ]
})