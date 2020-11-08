export const getTodoData = JSON.parse(localStorage.getItem('todoItem'));

export const setTodoData = (data) => {
  localStorage.setItem('todoItem', JSON.stringify(data));
}