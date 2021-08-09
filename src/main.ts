import { createApp } from 'vue'
import App from './AppPage.vue'
import router from './route'
import './assets/css/index.scss'

import antComponents from './config/ant.config'

let app = createApp(App)

antComponents.forEach(ant => {
  let component: any = ant
  app.use(component)
})

app.use(router).mount('#app')
