<template>
  <a-config-provider :locale="zhCN">
    <TopNav />
    <div class="app-container">
      <router-view />
    </div>
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopNav from '@/components/TopNav.vue'

import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/dist/locale/zh-cn'
moment.locale('zh-cn')

export default defineComponent({
  name: 'App',
  components: {
    TopNav
  },
  setup() {
    return { zhCN }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
.app-container {
  display: flex;
  box-sizing: border-box;
  padding-top: 64px;
}
</style>
