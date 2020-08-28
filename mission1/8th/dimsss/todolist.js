class validDataCheckError {
  constructor(todoData) {
    this.isValidTodoData(todoData)
  }

  isValidTodoData(todoData) {
    try {
      if (todoData === null || todoData === undefined) {
        throw new Error('입력 값이 비었습니다.');
      } else if (!Array.isArray(todoData)) {
        throw new Error('배열이 아닙니다.');
      }
  
      todoData.forEach((todo) => {
        if (typeof todo.text !== 'string') {
          throw new Error('todo 내용이 이상합니다.')
        }
      })
    } catch(e) {
      console.log(e);
      return e;
    }
  }
}

export class TodoList extends validDataCheckError {
  constructor(todoEliment, todoList) {
    try {
      super(todoList);
    
      this.todoEliment = todoEliment;
      this.todoList = todoList;
  
      this.render();
    } catch(e) {
      return;
    }
  }

  render() {
    this.todoEliment.innerHTML = this.createView(); 
  }

  createView() {
    return `${this.todoList.map((element) => {
      return `<li>${element.text}</li>`;
    }).join('')}</ul>`;
  }
}