<template>
  <div>
    page1
    <PageComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageComponent from './components/PageComponent.vue'

export default defineComponent({
  components: {
    PageComponent
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
</style>
