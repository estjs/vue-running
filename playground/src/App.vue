<template>
  <main font-sans text="gray-700 dark:gray-200" flex flex-col h-full w-full relative>
    <TheNav />
    <vue-running :dep-libs="depLibs" :code="code" :layout="layout" :show-code="true" :code-mirror-option="codeMirrorOption" />
  </main>
</template>

<script lang='ts' setup>
import vueRunning from 'vue-running'
import { isVertical, } from './composables';

const depLibs = reactive<Array<any>>([] )

const layout = computed(()=>{
  
  return isVertical.value ? 'vertical' : 'horizontal'
})

const codeMirrorOption = {
  // readOnly: true,
  // lineNumbers: false,
  // cursorBlinkRate: -1
}
const files = (import.meta as ImportMeta).glob('./eurus/*.{js,css}', { as: 'raw' })

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

// 
depLibs.push(...[{
  name: 'element-plus',
  url: 'https://cdn.jsdelivr.net/npm/element-plus@2.1.4/dist/index.full.mjs',
  type: 'js',
},
{
  name: '',
  url: 'https://cdn.jsdelivr.net/npm/element-plus@2.1.4/dist/index.css',
  type: 'css',
},
{
  name: 'quasar',
  url: 'https://cdn.jsdelivr.net/npm/quasar@2.7.1/dist/quasar.esm.prod.js',
  type: 'js',
},
{
  name: '',
  url: 'https://cdn.jsdelivr.net/npm/quasar@2.7.1/dist/quasar.css',
  type: 'css',
},
])

const code = `
 <script setup>
   import { ref } from 'vue'
   import { EButton } from 'eurus-ui'
   import { ElButton } from 'element-plus'
   import { QBtn } from 'quasar'
   const msg = ref('Hello World!')


   const handleClick = () => {
     alert('瞅你咋地？')
   }
 <\/script>
 <template>
   <h3>{{ msg }}</h3>
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
     <div class="q-pa-md q-gutter-sm">
    <q-btn color="white" text-color="black" label="Standard" />
    <q-btn color="primary" label="Primary" />
    <q-btn color="secondary" label="Secondary" />
    <q-btn color="amber" glossy label="Amber" />
    <q-btn color="brown-5" label="Brown 5" />
    <q-btn color="deep-orange" glossy label="Deep Orange" />
    <q-btn color="purple" label="Purple" />
    <q-btn color="black" label="Black" />
  </div>
 </template>
 <style>
   h1 {
     color: red;
   }
 </style>`.trim()
</script>
