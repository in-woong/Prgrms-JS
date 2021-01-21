import App from './App.js';

try {
  const $app = document.querySelector('#app');
  new App($app, 'yujinseo');
} catch (e) {
  console.log(e.message);
}