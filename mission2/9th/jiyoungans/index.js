const listSelector = "todo-list";
const inputSelector = "todo-input";
const data = [
  {
    text: "JS 공부하기",
    isCompleted: false
  },
  {
    text: "JS 복습하기",
    isCompleted: false
  }
];
const todoApp = new App(data, listSelector, inputSelector);

document.getElementById("add-todo").addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    todoApp.todoListComponent.addTodoList(e.currentTarget);
  }
});

function add() {
  todoApp.todoListComponent.addTodoList(document.getElementById("add-todo"));
}

function remove(idx) {
  todoApp.todoListComponent.removeTodoList(idx);
}

function complete(idx) {
  todoApp.todoListComponent.completeTodoList(idx);
}
