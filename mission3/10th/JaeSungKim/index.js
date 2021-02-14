import App from './App.js'

let initialData = []

if (!localStorage.getItem('appData')) {
  const newAppData = JSON.stringify({
    result: {},
    history: [],
  })
  window.localStorage.setItem('appData', newAppData)
}

try {
  initialData = JSON.parse(window.localStorage.getItem('appData'))
} catch (error) {
  throw error
}

try {
  new App(document.querySelector('#app'), initialData)
} catch (error) {
  throw error
}
