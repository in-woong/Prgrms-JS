import App from './App.js'
import { $ } from './utils.js'

document.addEventListener('DOMContentLoaded', () => {
  const target = $('#app')
  try {
    new App(target)
  } catch (error) {
    new Error(target, error)
  }
})
