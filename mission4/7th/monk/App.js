import TodoList from './TodoList.js'
import { getTodoList, addTodoItem, removeTodoItem, toggleTodo } from './api.js'

export default function App() {

  async function app() {
    const userName = 'roto';
    
    async function fetchData () {
      return await getTodoList(userName);
    }

    const data = await fetchData();
  
    const todoList = new TodoList({
      $target: document.querySelector('#todo-list'),
      data: data,
      onClick: 
        async function(id) {
          await toggleTodo(userName, id);
          const updateData = await fetchData();
          todoList.setState(updateData);
        }
      ,
      onRemove: async function(id) {
        await removeTodoItem(userName, id);
        // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
        const updatedData = await fetchData();
        todoList.setState(updatedData);
      },
    })
  
    document
      .querySelector('#add-todo-button')
      .addEventListener('click', async function() {
        const todoText = document.querySelector('#todo-input').value
  
        if (todoText.length > 0) {
          // 데이터 추가하기
          await addTodoItem(userName, todoText);
          // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
          const updatedData = await fetchData();
          todoList.setState(updatedData);
        }
      })
  }
  app();
}
