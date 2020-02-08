import { errorAlertTemplate } from './template.js'

export default function ErrorViewer(errorMessage) {
  const $errorMessageContainer = document.querySelector('#error-message')
  this.render = () => {
    $errorMessageContainer.innerHTML = errorAlertTemplate(errorMessage)
  }
}
