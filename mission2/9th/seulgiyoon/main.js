import App from './App.js'

document.addEventListener('DOMContentLoaded', () => {
  const app = new App('app')

  // 커스텀 이벤트
  app.addCustomResetEvent('@reset')
  document.getElementById('todo-reset').addEventListener('click', () => {
    app.el.dispatchEvent(new CustomEvent('@reset'))
  })
})
