import App from './App.js'

try {
  const $app = document.querySelector('#app')
  new App($app, 'gyeongjin')
} catch (e) {
  console.error(e)
  alert(e.message)
}
