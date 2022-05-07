<script setup lang="ts">
import { inject } from 'vue';
import CodeMirror from './codemirror/CodeMirror.vue';
import Message from './Message.vue';
import type { Store } from './store';
import { debounce } from './utils';
interface depLibsType {
  name: string; // ui library name
  url?: string; // url to library
  code?: string; // code to import
  type: 'js' | 'css'; // js or css. 
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface globalProps {
  readonly?: boolean;
  depLibs?: Array<depLibsType>;
  layout?: 'horizontal' | 'vertical';
}

const store = inject('store') as Store;
const globalProp = inject('globalProps') as globalProps;

const onChange = debounce((code: string) => {
  store.state.file.code = code;
}, 150);
</script>

<template>
  <div class="editor-container">
    <CodeMirror :value="store.state.file.code" :readonly="globalProp.readonly" @change="onChange" />
    <Message v-if="store.state.errors.length > 0 || store.state.warn.length > 0" :err="store.state.errors[0]" :warn="store.state.warn[0]" />
  </div>
</template>

<style scoped>
.editor-container {
  height: 100%;
  overflow: hidden;
  position: relative;
}
</style>
