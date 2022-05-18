import { App } from './components/index.js';
import { $ } from './util/index.js';

new App({
  $target: $('#app'),
  initialState: { data: [], history: [] },
});
