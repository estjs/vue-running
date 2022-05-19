import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    minify: false,
    lib: {
      entry: './src/main.ts',
      formats: ['es', 'cjs'],
      fileName: (module) =>{
        return `vue-running.${module === 'es' ? 'm' : 'c'}js`
        
      }
    },
    rollupOptions: {
      external: ['vue', 'vue/compiler-sfc']
    }
  }
})
