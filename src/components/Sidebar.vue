<template>
  <div class="sidebar-page">
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      @click="handleClick"
    >
      <a-sub-menu
        v-for="item in route.matched.slice(0, 1)"
        :key="item.name"
        @titleClick="titleClick"
      >
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>{{ item.meta.title }}</template>

        <a-menu-item v-for="ite in item.children || []" :key="ite.name">
          {{ ite.meta.title }}
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, VNodeChild } from 'vue'
import { AppstoreOutlined } from '@ant-design/icons-vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  components: {
    AppstoreOutlined
  },
  setup() {
    const route = useRoute()

    const state = {
      selectedKeys: ref<string[] | object>([route.name]),
      openKeys: ref<string[]>(['Data']),
      route: useRoute(),
      router: useRouter()
    }

    interface MenuInfo {
      key: string
      keyPath: string[]
      item: VNodeChild
      domEvent: MouseEvent
    }

    const handleClick = (e: MenuInfo) => {
      state.router.push({
        name: e.key
      })
    }

    const titleClick = (e: MenuInfo) => {
      console.log('titleClick', e.key)
    }

    watch(
      () => route,
      val => {
        console.log('route', val)
      }
    )

    return {
      ...state,
      handleClick,
      titleClick
    }
  }
})
</script>

<style lang="scss">
.sidebar-page {
  border-right: 1px solid #f0f0f0;
  position: fixed;
  .ant-menu {
    min-height: 100vh;
    width: 200px;
  }
  .ant-menu-sub.ant-menu-inline {
    background: #fff;
  }
  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border-right: none;
  }
}
</style>
