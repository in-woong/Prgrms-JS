const fetchTodoList = () => {
  try {
    const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    return todoList;
  } catch (e) {
    alert('정보를 불러오는데 실패했습니다.');
    console.error(e);
  }
}

const postTodo = data => {
  try {
    localStorage.setItem('todoList', JSON.stringify(data));
  } catch (e) {
    alert('정보를 저장하는데 실패했습니다.');
    console.error(e);
  }
}

export { fetchTodoList, postTodo }
