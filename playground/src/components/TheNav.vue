<script setup lang="ts">
import { isDark, toggleDark, toggleLayout, isVertical } from '~/composables'
</script>

<template>
  <nav px8 py4 border="b gray-400/10" flex="~ gap2" text-xl items-center>
    <div font-mono text-left leading-1em mr6 text-sm>Vue running</div>

    <div flex-auto />

    <div flex="~ gap4 " items-center>
      <button class="icon-btn !outline-none" @click="toggleLayout()">
        <div v-if="isVertical" i-carbon-open-panel-filled-top />
        <div v-else i-carbon-open-panel-filled-left />
      </button>

      <!-- <button class="icon-btn !outline-none p1" @click="toggleDebug()">
        <div i-carbon-reset />
      </button> -->
      <button class="icon-btn !outline-none" @click="toggleDark()">
        <div v-if="isDark" i-carbon-moon />
        <div v-else i-carbon-sun />
      </button>
      <a
        class="icon-btn"
        i-carbon-logo-github
        rel="noreferrer"
        href="https://github.com/estjs/vue-running"
        target="_blank"
        title="GitHub"
      />
    </div>
  </nav>
</template>
