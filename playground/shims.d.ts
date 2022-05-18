/// <reference types="vue/macros-global" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface ImportMeta {

  glob<Module = Record<string, any>>(
    pattern: string,
    options?: GlobOptions
  ): Record<string, () => Promise<Module>>;

  globEager<T = unknown>(globPath: string): Record<string, T>[];
}
