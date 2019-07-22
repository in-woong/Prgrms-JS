;(async function() {
  const data = await fetchDataAPI()

  const todoList = new TodoList({
    $target: document.querySelector('#todo-list'),
    data: data,
    onClick: async function(id) {
      await toggleTodoIdAPI(id)

      // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
      const updatedData = await fetchDataAPI()
      todoList.setState(updatedData)
    },
    onRemove: async function(id) {
      await deleteTodoAPI(id)

      // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
      const updatedData = await fetchDataAPI()
      todoList.setState(updatedData)
    },
  })

  document
    .querySelector('#add-todo-button')
    .addEventListener('click', async function() {
      const todoText = document.querySelector('#todo-input').value

      if (todoText.length > 0) {
        // 데이터 추가하기
        await addTodoAPI(todoText)

        // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
        const updatedData = await fetchDataAPI()
        todoList.setState(updatedData)
      }
    })
})()
