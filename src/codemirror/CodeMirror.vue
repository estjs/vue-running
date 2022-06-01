<template>
  <div ref="el" class="editor" />
</template>

<script setup lang="ts">
import type { EditorConfiguration } from 'codemirror';
import { onMounted, ref, watchEffect } from 'vue';
import { debounce } from '../utils';
import CodeMirror, { codemirrorOption } from './codemirror';

const props = withDefaults(defineProps<{
  mode?: string;
  value?: string;
  codeMirrorOption?: EditorConfiguration;
}>(), {
  mode: 'htmlmixed',
  value: '',
  readonly: false,
});

const emit = defineEmits<(e: 'change', value: string) => void>();

const el = ref<HTMLElement>();

onMounted(() => {
  const editor = CodeMirror(el.value!, {
    ...codemirrorOption,
    ...props.codeMirrorOption,
    ...{
      value: '',
      lineWrapping: true,
    },
  });

  editor.on('change', () => {
    emit('change', editor.getValue());
  });

  watchEffect(() => {
    const cur = editor.getValue();
    if (props.value !== cur) { editor.setValue(props.value); }
  });

  watchEffect(() => {
    editor.setOption('mode', props.mode);
  });

  setTimeout(() => {
    editor.refresh();
  }, 50);

});
</script>

<style>
.editor {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.CodeMirror {
  font-family: var(--font-code);
  line-height: 1.5;
  height: 100%;
}
</style>
