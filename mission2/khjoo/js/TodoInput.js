// 'todo'를 추가하는 버튼 작성하기 (#75)
// 'TodoInput'으로 분리하기 (#76)
export default function TodoInput(TodoList) {
    const addTodoButton = document.querySelector('#add-todo__button');
    const addTodoInput = document.querySelector('#add-todo__input');
  
    addTodoButton.addEventListener('click', function () {
      const addTodoInputValue = addTodoInput.value
      // localStorage (#91)
      addTodoInputValue.length &&
        localStorage.setItem(
          localStorage.length,
          JSON.stringify({
            text: addTodoInputValue,
            isCompleted: false,
          })
        )
  
      TodoList.render()
      addTodoInput.value = ''
    })
  }