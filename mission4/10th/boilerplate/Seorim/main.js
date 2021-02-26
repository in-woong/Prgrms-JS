import { getTodoList, updateNewTodo, removeTodo, createNewTodo } from './api.js'
import TodoList from './TodoList.js'

(async function () {
  const username = 'seorim';

  async function fetchData() {
    const res = await getTodoList(username)
    return await res.json();
  }

  const data = await fetchData();

  async function setState(todoList) {
    const updatedData = await fetchData()
    todoList.setState(updatedData)  
  }

  const todoList = new TodoList({
    $target: document.querySelector('#todo-list'),
    data: data,
    onClick: async function (id) {
      // 데이터 추가하기
      await updateNewTodo(username, id)
      // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
      const updatedData = await fetchData();
      todoList.setState(updatedData);
    },
    onRemove: async function (id) {
      //데이터 지우기
      await removeTodo(username, id)
      // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
      const updatedData = await fetchData();
      todoList.setState(updatedData);
    },
  });

  document
    .querySelector('#add-todo-button')
    .addEventListener('click', async function () {
      const todoText = document.querySelector('#todo-input').value;

      if (todoText.length > 0) {
        // 데이터 추가하기
        await createNewTodo(username, todoText)

        // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
        const updatedData = await fetchData();
        todoList.setState(updatedData);
      }
    });
})();
