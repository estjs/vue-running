import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
export default defineConfig({
  plugins: [
    vue(), // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss({
      configFile: path.resolve(__dirname, 'uno.config.ts'),
    })],
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
      output: {
        exports: 'named',
      },
      external: ['vue', 'vue/compiler-sfc']
    }

  }
})
