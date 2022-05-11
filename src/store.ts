import { reactive, watchEffect } from 'vue';
import { compileFile } from './transform';
export interface depLibsType {
  name: string; // ui library name
  url?: string; // url to library
  code?: string; // code to import
  type: 'js' | 'css'; // js or css. 
}
const welcomeCode = `
<script setup>
import { ref } from 'vue'
import {EButton} from "eurus-ui"
import {ElButton} from "element-plus"
const msg = ref('Hello World!')

const handleClick = () => {
  alert("瞅你咋地？")
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg">
  <br/>
  <br/>
  <h2>
    use component library example
  </h2>
  <el-button @click="handleClick">element-plus</el-button>
  <br/>
  <e-button @click="handleClick">eurus-ui</e-button>
  <br/>
</template>

<style>
  h1 {
    color: red;
  }
</style>
`.trim();

export class File {
  code: string;
  compiled = {
    js: '',
    css: '',
    ssr: '',
  };

  constructor(code = '') {
    this.code = code;
  }
}
export interface StoreState {
  file: File;
  errors: (string | Error)[];
  warn: string[];
}

export interface Store {
  state: StoreState;
}

export class replStore implements Store {
  state: StoreState;
  constructor() {
    const file: File = new File(welcomeCode);

    this.state = reactive({
      file,
      errors: [],
      warn: []
    });
    watchEffect(() => {
      compileFile(this, this.state.file);
    });

    compileFile(this, this.state.file);
  }
}
