import App from './components/App.js'
import { getStorage } from './utils/storage.js'

new App({
  $container: document.querySelector('#app'),
  initState: getStorage('todos', []),
})
