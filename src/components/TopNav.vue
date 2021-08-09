<template>
  <div class="nav-page">
    <img src="@/assets/img/1.png" width="40" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TopNav',
  setup: () => {}
})
</script>

<style scoped lang="scss">
.nav-page {
  height: 64px;
  line-height: 32px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  padding: 16px 32px;
  z-index: 1000;
  position: fixed;
  width: 100%;
}
</style>
