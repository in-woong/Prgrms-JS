import App from './App.js';
import { getItem } from './storage.js';

const $target = document.querySelector('.App');

const cacheKey = 'todo1';

new App({
  $target,
  initialState: getItem(cacheKey, []),
  cacheKey,
});
