<template>
  <main font-sans text="gray-700 dark:gray-200" flex flex-col h-full w-full relative>
    <TheNav />
    <vue-running :dep-libs="depLibs" />
  </main>
</template>

<script lang="ts" setup>
import vueRunning from 'vue-running'

const depLibs = reactive< Array<any>>([] )

const files = import.meta.glob('./source/*.{js,css}', { as: 'raw' })

Object.keys(files).forEach((key)=> {
  
  if (key.endsWith('.js')) {
    depLibs.push({
      name: 'eurus-ui',
      code: files[key],
      type: 'js',
    })
  }
  if (key.endsWith('.css')) {
    depLibs.push({
      name: key.split('.')[0],
      code: files[key],
      type: 'css',
    })
  }
})

depLibs.push(...[{
  name: 'element-plus',
  url: 'https://cdn.jsdelivr.net/npm/element-plus@2.1.4/dist/index.full.mjs',
  type: 'js',
},
{
  name: 'element-plus',
  url: 'https://cdn.jsdelivr.net/npm/element-plus@2.1.4/dist/index.full.mjs',
  type: 'js',
},
{
  name: 'element-plus_css',
  url: 'https://unpkg.com/element-plus/dist/index.css',
  type: 'css',
}])
</script>
