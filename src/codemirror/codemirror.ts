import type { EditorConfiguration } from 'codemirror';
import CodeMirror from 'codemirror';
import './codemirror.css';

// language
import 'codemirror/mode/vue/vue.js';

// highlightSelectionMatches
import 'codemirror/addon/scroll/annotatescrollbar.js';
import 'codemirror/addon/search/matchesonscrollbar.js';

// modes
import 'codemirror/mode/javascript/javascript.js';
// addons
import 'codemirror/addon/edit/closebrackets.js';
import 'codemirror/addon/edit/closetag.js';
import 'codemirror/addon/comment/comment.js';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/indent-fold.js';
import 'codemirror/addon/fold/comment-fold.js';

export const codemirrorOption: EditorConfiguration = {
  tabSize: 2,
  mode: 'text/x-vue',
  lineNumbers: true,
  autoCloseTags: true,
  readOnly: false,
  lineWrapping: true,
  viewportMargin: Number.POSITIVE_INFINITY,
  gutters: ['CodeMirror-linenumbers'],

  // scrollbarStyle: 'null',
  showCursorWhenSelecting: true,
  extraKeys: { Ctrl: 'autocomplete' },
};

export default CodeMirror;
