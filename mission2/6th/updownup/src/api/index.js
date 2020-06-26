const fetchTodoList = () => {
  try {
    const todoList = localStorage.getItem('todoList') || []
    return todoList
  } catch (error) {
    alert('todo 리스트를 불러오는데 실패 했습니다!')
    console.log(error)
  }
}

const postTodo = data => {
  try {
    localStorage.setItem('todoList', JSON.stringify(data))
  } catch (error) {
    alert('todo 정보를 저장하는데 실패했습니다! ')
    console.log(error)
  }
}

export { fetchTodoList, postTodo }
