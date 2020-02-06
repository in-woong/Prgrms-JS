import App from './App.js'
import ErrorViewer from './ErrorViewer.js'

try {
  new App()
} catch(error) {
  new ErrorViewer(error)
}

