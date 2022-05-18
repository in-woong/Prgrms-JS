import { $ } from './util/selector.js';
import App from './App.js';

const $App = $('#root');

new App({ $target: $App });
