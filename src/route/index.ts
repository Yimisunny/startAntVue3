import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
// import { addMiddlewares } from './middlewares'

const router =  createRouter({
  history: createWebHistory(),
  routes
})

// addMiddlewares(router)

export default router