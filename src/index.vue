<template>
  <div class="vue-run" dark:bg-hex-242424>
    <SplitPane :layout="layout" :show-code="props.showCode">
      <template #right>
        <Editor />
      </template>
      <template #left>
        <Preview />
      </template>
    </SplitPane>
  </div>
</template>

<script lang="ts" setup>
import { provide } from 'vue';
import type { EditorConfiguration } from 'codemirror';
import SplitPane from './SplitPane.vue';
import Editor from './Editor.vue';
import Preview from './Preview.vue';
import type { depLibsType } from './store';
import { replStore } from './store';

const props = withDefaults(defineProps<{
  codeMirrorOption?: EditorConfiguration;
  depLibs?: Array<depLibsType>;
  code?: string;
  showCode?: boolean;
  layout?: 'horizontal' | 'vertical';
}
>(), {
  codeMirrorOption: ()=>{ return {} },
  layout: 'horizontal',
  code: '',
  showCode: true,
  depLibs: ()=>[],
} );

const store = new replStore(props.code);

provide('globalProps', props);
provide('store', store);
</script>

<style scoped>
.vue-run {
  --bg: #fff;
  --bg-soft: #f8f8f8;
  --border: #ddd;
  --text-light: #888;
  --font-code: Menlo, Monaco, Consolas, 'Courier New', monospace;
  --color-branding: #42b883;
  --color-branding-dark: #416f9c;
  --header-height: 38px; 

  height: 100%;
  width: 100%;
  flex: 1;
  font-size: 13px;
  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
  margin: 0;
  overflow: hidden;
  background-color: var(--bg-soft);
}
</style>
