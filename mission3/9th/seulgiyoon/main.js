import App from './App.js'

document.addEventListener('DOMContentLoaded', () => {
  try {
    new App({ target: '#app' })
  } catch (error) {
    alert(error.massage)
  }
})
