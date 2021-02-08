const ENTER_KEY_CODE = 13

export default function TodoInput({ $app, onTodoInput }) {
  const $todoInput = document.createElement('input') 
  $app.appendChild($todoInput) // #app에 input태그 추가

  $todoInput.addEventListener('keydown', (e) => {
    if (e.keyCode === ENTER_KEY_CODE) { // 엔터키를 친다면
      const text = e.target.value // input의 값을 text로 저장
      onTodoInput(text) // onTodoInput 함수에 text값을 넘겨줌 => 여기선 함수가 뭘하는지 알 필요 없음.
      e.target.value = '' // input의 value를 비워줌으로서 사용편의성 증진
    }
  })

  this.render = () => {}
}
