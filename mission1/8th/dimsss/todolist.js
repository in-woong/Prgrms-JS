export class TodoList {
  constructor(todoEliment, todoList) {
    this.todoEliment = todoEliment;
    this.todoList = todoList;

    this.render();
  }

  render() {
    this.todoEliment.innerHTML = this.createView(); 
  }

  createView() {
    return '<ul>' + this.todoList.map((element) => {
      return `<li>${element.text}</li>`;
    }).join('')  + '</ul>';
  }
}
