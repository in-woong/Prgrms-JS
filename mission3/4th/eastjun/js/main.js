import App from './App.js'
import ErrorViewer from './utils/ErrorViewer.js'

(() => {
  try {
    const app = new App()
    app.init()
  } catch (err) {
    const errorViewer = new ErrorViewer(err)
    errorViewer.render(err)
  }
})()
