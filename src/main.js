import Vue, { createApp } from 'vue';
import HomePage from '@/components/HomePage.vue';
import NewsDetail from '@/components/NewsDetail.vue';
Vue.use(Vue);
i
// const routes = [
//   {
//     path: '/'
//     name; 'Home'
//     component: HomePage,
//   },
//   {
//     path '/news/:id'
//     name; 'NewsDetail',
//     component: NewsDetail,
//   },
// ];

const router = new Router({
  mode: 'history',
  routes,
});
const app = createApp(App);
app.use(router);
app.mount('#app');
export default router;

