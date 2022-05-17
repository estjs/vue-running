<template>
  <main font-sans text='gray-700 dark:gray-200' flex flex-col h-full w-full relative>
    <TheNav />
    <vue-running :dep-libs='depLibs' :code='code' />
  </main>
</template>

<script lang='ts' setup>
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
  name: '',
  url: 'https://cdn.jsdelivr.net/npm/element-plus@2.1.4/dist/index.css',
  type: 'css',
}])


const code = `<script setup>
        import { ref } from 'vue'
        import {EButton} from 'eurus-ui'
        import {ElButton} from 'element-plus'
        const msg = ref('Hello World!')

        const handleClick = () => {
          alert('瞅你咋地？')
        }
    </script>
    <template>
      <h1>{{ msg }}</h1>
      <input v-model='msg'>
      <br/>
      <br/>
      <h2>
        use component library example
      </h2>
      <el-button @click='handleClick'>element-plus</el-button>
      <br/>
      <e-button @click='handleClick'>eurus-ui</e-button>
      <br/>
    </template>
    <style>
      h1 {
        color: red;
      }
    </style>`.trim()


</script>
