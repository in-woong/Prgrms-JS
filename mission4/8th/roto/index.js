import App from './App.js'

try {
  const $app = document.querySelector('.app')
  new App($app, 'roto')
} catch (e) {
  alert(e.message)
}
