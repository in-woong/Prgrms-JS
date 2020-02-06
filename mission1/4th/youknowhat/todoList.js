
function TodoList(todoData, targetId) {

  if (!this.constructor == TodoList) {
    throw new Error('must call with new keyword');
  }

  this.todoData = todoData;
  this.targetId = targetId;

  this.isValidArray = function(data) {
    if (!Array.isArray(data) || !data.length) {
      throw new Error('data is not array or empty');
    }
  }

  this.render = function() {
    let $todoList = document.getElementById(targetId);
    $todoList.innerHTML = this.todoData.map(todo => todo.isCompleted ? `<del>${todo.text}</del>` : `<span>${todo.text}</span>`);
  }

  this.setState = function(nextData) {
    this.isValidArray(nextData);

    this.todoData = nextData;
    this.render();
  };
}

const mondayTodos = new TodoList(weeklyTodos.monday, 'mondayTodos');
const tuesdayTodos = new TodoList(weeklyTodos.tuesday, 'tuesdayTodos');
const wednesdayTodos = new TodoList(weeklyTodos.wednesday, 'wednesdayTodos');

mondayTodos.render();
tuesdayTodos.render();
wednesdayTodos.render();

setTimeout(() => {
  wednesdayTodos.setState(weeklyTodos.sunday);
}, 2000);
