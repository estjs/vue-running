import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vue(), 
    vueJsx(),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify()
      ]
    })
  ],
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
