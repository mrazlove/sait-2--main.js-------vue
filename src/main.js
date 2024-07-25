import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/HomePage.vue';
import NewsDetail from '@/components/NewsDetail.vue';
import App from '@/App.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/news/:id',
    name: 'NewsDetail',
    component: NewsDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
const app = createApp(App);
app.use(router);
app.mount('#app');

