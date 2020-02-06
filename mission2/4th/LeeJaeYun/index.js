const todoList = new TodoList(data, "todo-list");

const addButton = document.querySelector("#add-button");
addButton.addEventListener("click", () => {todoList.addNewTodo()});

todoList.render();
