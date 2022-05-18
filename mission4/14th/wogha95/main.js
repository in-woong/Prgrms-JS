import app from './app.js';

try {
  const $app = document.querySelector('#app');
  new app({ $target: $app });
} catch (error) {
  console.log(error);
}
