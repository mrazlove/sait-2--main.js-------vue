import { createRouter } from 'vue-router'
const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: News },
]

const router = createRouter({
  routes,
})
