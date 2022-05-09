# 在线运行vue文件

 >fork自[vuejs/repl](https://github.com/vuejs/repl).


<h3 align='center'>
<a href="https://vue-running.netlify.app/">在线示例</a>
</h3>

<p align='center'>
<p align="center"><a href="./README.md">English</a> | 简体中文</p>
<!-- Contributors: Thanks for geting interested, however we DON'T accept new transitions to the README, thanks. -->
</p>

## 由来

当需要演示vue组件/效果时，需要在线预览的功能。

与[sfc](https://sfc.vuejs.org/)不同的是，可以嵌入到组件，支持ui库的引入。


## 安装

```
npm i vue-running
```

## 使用


```html
<script setup>
import vueRunning from 'vue-running'
</script>
```
## Options
  - codeMirrorOption: 

     codeMirror的配置, 请移步[CodeMirror](https://codemirror.net/doc/manual.html#config)查看
  - depLibs:
    
     依赖库/组件
      ```typescript
      interface depLibsType {
        name: string; // 名称
        url?: string; // 地址
        code?: string; // 源码
        type: 'js' | 'css'; // 类型，是js还是css
      }
      ```
  layout: 
    
    布局方式 
      'horizontal' 水平布局
      'vertical'   垂直布局





