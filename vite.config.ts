import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

export default defineConfig({
  base: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        assetFileNames: 'css/[name].[hash].css',
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js'
      }
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  server: {
    port: 3555,
    proxy: {
      // '^/api/.*': {
      //   target: 'https://***/',
      //   changeOrigin: true,
      //   // rewrite: (path) => path.replace(/^\/api/, '')
      // },
      // '^/api/web/.*': {
      //   target: 'https://***/',
      //   changeOrigin: true
      // }
    }
  }
})
