import { createMemoryHistory, createRouter } from 'vue-router'

import MyHome from './components/MyHome.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'

const routes = [
  { path: '/', component: MyHome },
  { path: '/experience', component: Experience },
  { path: '/projects', component: Projects },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router