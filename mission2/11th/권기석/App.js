function App($target, $input) {
  const $list = document.createElement('ul')
  localStorageItem = localStorage.getItem('data')
  const initialData = localStorageItem ? JSON.parse(localStorageItem) : []
  $target.appendChild($list)

  this.todoCounter = new TodoCount($target, initialData)

  this.todoList = new TodoList($list, initialData, (nextData) => {
    this.todoCounter.setState(nextData)
  })

  // 콜백 함수와 function 함수에서 this 차이 공부해볼 것, 콜백함수를 사용했을 때는 에러가 안생김!
  this.todoInput = new TodoInput($input, (title) => {
    this.todoList.setState([
      ...this.todoList.data,
      {
        text: title,
        isCompleted: false,
      },
    ])
  })
}
