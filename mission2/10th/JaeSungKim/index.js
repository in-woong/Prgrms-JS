import App from './App.js'

try {
  new App()
} catch (error) {
  throw new Error('App component is not available')
}
