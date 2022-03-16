import App from './App.js'

try {
  const $app = document.querySelector('#app')

  new App({
    $target: $app,
    initialState: [],
  })
} catch (error) {
  alert(error.message)
}
