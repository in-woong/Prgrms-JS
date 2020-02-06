import App from './App.js'
import ErrorViewer from './ErrorViewer.js'

function init() {
  const $historyTargetId = document.querySelector('#search-history')
  const $inputTargetId = document.querySelector('#search-keyword')
  const $resultTargetId = document.querySelector('#search-result')
  const app = new App($historyTargetId, $inputTargetId, $resultTargetId)
}

try {
  init()
} catch (err) {
  const $errorTarget = document.querySelector('#errorView-container')
  new ErrorViewer($errorTarget).render(err)
}
