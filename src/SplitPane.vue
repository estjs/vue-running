<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const props = defineProps<{ layout?: 'horizontal' | 'vertical'; showCode: boolean }>();
const isVertical = computed(() => props.layout === 'vertical');

const container = ref();
const leftHeight = ref('auto')

const containerHeight = ref(0);

onMounted(()=>{
  containerHeight.value = container.value.clientHeight;
})

window.addEventListener('storage', (event) => { 
  if (event.key === 'VueRunningAppHeight' && event.newValue !== '0' && containerHeight.value !== container.value.clientHeight) {
    leftHeight.value = event.newValue + 'px';
    containerHeight.value = container.value.clientHeight;
  }
});
</script>

<template>
  <div ref="container" class="split-pane" :class="{ vertical: isVertical }">
    <div class="left" :style="{ height: leftHeight }">
      <slot name="left" :layout="props.layout" />
    </div>
    <div v-if="props.showCode" class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.split-pane {
  display: flex;
  align-items: top;
  position: relative;
}

.left,
.right {
  position: relative;
  flex: 1;
}

.right {
  border-left: 1px solid var(--border);
}

.dragger {
  position: absolute;
  z-index: 3;
  top: 0;
  bottom: 0;
  right: -5px;
  width: 10px;
  cursor: ew-resize;
}

.toggler {
  display: none;
  z-index: 3;
  font-family: var(--font-code);
  color: var(--text-light);
  position: absolute;
  left: 50%;
  bottom: 20px;
  background-color: var(--bg);
  padding: 8px 12px;
  border-radius: 8px;
  transform: translateX(-50%);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
}

.dark .toggler {
  background-color: var(--bg);
}

.vertical {
  display: block;
  }

.vertical.dragging {
    cursor: ns-resize;
  }

  .vertical .dragger {
    top: auto;
    height: 10px;
    width: 100%;
    left: 0;
    right: 0;
    bottom: -5px;
    cursor: ns-resize;
  }

  .vertical .left,
  .vertical .right {
    width: 100%;
  }

  .vertical .left {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
</style>
