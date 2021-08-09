import { RouteRecordRaw } from 'vue-router'

const RouterIndex = () => import('@/views/Index.vue')
const Page1 = () => import('@/views/unit1/Page1.vue')
const Page2 = () => import('@/views/unit1/Page2.vue')
const Page3 = () => import('@/views/unit1/Page3.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/pages'
  },
  {
    path: '/pages',
    name: 'Data',
    redirect: '/pages/pagge1',
    meta: {
      title: '主菜单'
    },
    component: RouterIndex,
    children:[
      {
        path: 'pagge1',
        name: 'Page1',
        component: Page1,
        meta: {
          title: '页面一'
        }
      },
      {
        path: 'page2',
        name: 'Page2',
        component: Page2,
        meta: {
          title: '页面二'
        }
      },
      {
        path: 'page3',
        name: 'Page3',
        component: Page3,
        meta: {
          title: '页面三'
        }
      }
    ]
  }
]

export default routes