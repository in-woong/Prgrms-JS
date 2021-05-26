import App from './App.js'

let initialData = []

if (!localStorage.getItem('appData')) {
  const newAppData = JSON.stringify({
    results: {},
    histories: [],
  })
  window.localStorage.setItem('appData', newAppData)
}

try {
  initialData = JSON.parse(window.localStorage.getItem('appData'))
} catch (error) {
  throw error
}

try {
  new App(initialData)
} catch (error) {
  throw error
}
