import App from './App.js'

window.addEventListener('DOMContentLoaded', async () => {
  /*
   * @description 최상위 컴포넌트에서 자식 컴포넌트의 catch를 모두 감지하여 한번에 처리하는 방법은 없을까요?
   */
  try {
    new App(document.getElementById('app'))
  } catch (e) {
    alert(e)
  }
})
