import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import About from './pages/About.vue';
import Error404 from './pages/Error404.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/progetti',
            name: 'projects',
            component: Projects
        },
        {
            path: '/chi-sono',
            name: 'about',
            component: About
        },
        {
            path: '/:patchMatch(.*)*',
            name: 'error',
            component: Error404
        },
    ]
})

export { router }