import { $ } from './utils.js'
import App from './App.js';

document.addEventListener('DOMContentLoaded', () => {
  try {
    new App($('#app'))
  } catch (error) {
    console.error(error)
  }
})