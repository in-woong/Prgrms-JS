import App from './App.js'
import Error from './Error.js'
import { $target } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  const target = $target('#app')

  try {
    new App(target)
  } catch (error) {
    new Error(target, error)
  }
})
