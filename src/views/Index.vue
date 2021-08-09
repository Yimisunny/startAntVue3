<template>
  <Sidebar />
  <div class="data-container">
    <div class="container-title">{{ route.meta.title }}</div>
    <router-view />
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Sidebar
  },
  setup() {
    const route = useRoute()
    return { route }
  }
}
</script>

<style lang="scss" scoped>
.data-container {
  padding: 24px;
  width: calc(100% - 201px);
  margin-left: 200px;
  box-sizing: border-box;
  .container-title {
    font-weight: 600;
    font-size: 20px;
    color: #000;
    margin-bottom: 20px;
  }
}
</style>