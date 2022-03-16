import App from './App.js';
import storage from './storage.js';

const TODOS_STORAGE_KEY = 'todos';

const data = storage.getItem({
  storageKeyName: TODOS_STORAGE_KEY,
  defaultValue: [],
});

try {
  const $app = document.querySelector('#app');
  new App({
    $target: $app,
    initialState: data,
  });
} catch (error) {
  alert(error.message);
}
