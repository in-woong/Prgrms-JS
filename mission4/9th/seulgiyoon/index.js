import App from './App.js'

document.addEventListener('DOMContentLoaded', () => {
  try {
    new App('app')
  } catch (error) {
    alert(error.message)
  }
})
