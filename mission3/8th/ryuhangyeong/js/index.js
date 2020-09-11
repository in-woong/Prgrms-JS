window.addEventListener('DOMContentLoaded', () => {
  try {
    new App(document.getElementById('app'))
  } catch (e) {
    /*
     * @description 여기에서 App에서 일어난 모든 에러를 잡아내고 싶은데요! 어떻게 할 수 있을 지 잘 모르겠어요 ㅠㅠ
     */
    alert(e)
  }
})
