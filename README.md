# running  Vue3 file online
>This project fork from [vuejs/repl](https://github.com/vuejs/repl).


<h3 align='center'>
<a href="https://vue-running.netlify.app/">Live Demo</a>
</h3>

<p align='center'>
<b>English</b> | <a href="https://github.com/estjs/vue-running/blob/main/README.zh-CN.md">简体中文</a>
<!-- Contributors: Thanks for geting interested, however we DON'T accept new transitions to the README, thanks. -->
</p>

## Why?

When you need to demonstrate vue components/effects, need the ability to preview online. 
Unlike [sfc](https://sfc.vuejs.org/), it can be embedded into components and supports ui library introduction.


## Install

```
npm i vue-running
```

## Usage


```html
<script setup>
import vueRunning from 'vue-running'
</script>
```
## Options
  - codeMirrorOption: 
  
    codeMirror options, please see [CodeMirror](https://codemirror.net/doc/manual.html#config)
  - depLibs:
      
       dependencies 
      ```typescript
      interface depLibsType {
        name: string; // ui library name
        url?: string; // url to library
        code?: string; // code to import
        type: 'js' | 'css'; // js or css. 
      }
      ```
  layout: 
    
    layout 'horizontal' | 'vertical';


