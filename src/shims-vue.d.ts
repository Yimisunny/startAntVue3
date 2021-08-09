declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare module '*'
declare module 'component-cookie'
declare module '@/config/gateway.config'
declare module '@/utils'
declare module '@/utils/axios'