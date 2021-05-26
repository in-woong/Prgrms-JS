import App from './App.js'

try {
  new App(document.querySelector('#app'))
} catch (e) {
  console.error(e)
  alert(e.message)
}
