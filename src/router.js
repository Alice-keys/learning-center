import Home from "./shared/presentation/views/home.vue";
import {createRouter} from "vue-router";

const about = () => import('./shared/presentation/views/about.vue');
const pageNotFound = () => import('./shared/presentation/views/page-not-found.vue');

const routes = [
    { path: '/home', name: 'home', component: Home, meta: {tittle: 'Home'} },
    { path: '/about', name: 'about', component: Home, meta: {tittle: 'About'} },
    {path: '/', redirect: '/home'},
    {path: '/:pathMatch(.*)*', name: 'not-found', component: pageNotFound, meta: {tittle: 'Page not found'}},

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

export default router;