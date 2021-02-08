const $todoInput = document.querySelector('#create-todo');
const ENTER_KEY_CODE = 'Enter'

function AddTodo({ onPressEnter }) {
    this.onPressEnter = onPressEnter

    $todoInput.addEventListener('keypress', (e) => {
        const { value } = e.target

        if (e.key === ENTER_KEY_CODE) {
            if (value.length === 0 || value.trim() === "") {
                alert("할 일을 입력해주세요~")
            } else {
                $todoInput.value = ''
                this.onPressEnter(value) // AddTodo를 생성하면서 정의한 콜백함수를 여기서 실행.
                // 이렇게 하면 AddTodo는 onPressEnter의 구현이 뭔지 몰라도 됨.       
            }
        }
    })
}

export default AddTodo
