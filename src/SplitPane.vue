<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{ layout?: 'horizontal' | 'vertical'; showCode: boolean }>();
const isVertical = computed(() => props.layout === 'vertical');

const container = ref();
</script>

<template>
  <div ref="container" class="split-pane" :class="{ vertical: isVertical }">
    <div class="left">
      <slot name="left" />
    </div>
    <div v-if="props.showCode" class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.split-pane {
  display: flex;
  height: 100%;
  position: relative;
}

.left,
.right {
  position: relative;
  height: 100%;
  flex: 1;
}

.left {
  border-right: 1px solid var(--border);
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

/* vertical */
@media (min-width: 721px) {
  .split-pane.vertical {
    display: block;
  }

  .split-pane.vertical.dragging {
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
}

/* mobile */
@media (max-width: 720px) {
  .left,
  .right {
    width: 100% !important;
    height: 100% !important;
  }

  .dragger {
    display: none;
  }

  .split-pane .toggler {
    display: block;
  }

  .split-pane .right {
    display: none;
  }

  .split-pane.show-output .right {
    display: block;
  }

  .split-pane.show-output .left {
    display: none;
  }
}
</style>
