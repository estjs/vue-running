import type { PropType } from 'vue';
import { defineComponent, provide } from 'vue';
import type { EditorConfiguration } from 'codemirror';
import SplitPane from './SplitPane.vue';
import Editor from './Editor.vue';
import Preview from './Preview.vue';
import type { depLibsType } from './store';
import { replStore } from './store';

const DefineProps = {
  CodeMirrorOption: {
    type: Object as PropType<EditorConfiguration>,
    default: () => {
      return {};
    },
  },
  DepLibs: {
    type: Array as PropType<Array<depLibsType>>,
    default: () => [],
  },
  code: {
    type: String,
    default: '',
  },
  showCode: {
    type: Boolean,
    default: true,
  },
  layout: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'vertical',
  },
};  

export default defineComponent({
  name: 'VueRunning',
  props: DefineProps,
  setup(props) {

    const store = new replStore(props.code);

    provide('globalProps', props);
    provide('store', store);
    return ()=>{
      const slots = {
        right: () => {
          return <Editor />;
        },
        left: () => {
          return <Preview />;

        },
      };
      return <div class="h-full w-full flex-1 text-3 m-0 of-hidden dark:bg-hex-242424">
                <SplitPane layout={props.layout} showCode={props.showCode} v-slots={slots} />
             </div>
    }
  },
})
