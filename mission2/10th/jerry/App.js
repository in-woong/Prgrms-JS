

function App() {
  var data = [
    {
      text: 'JS 공부하기',
      isCompleted: false,
    },
    {
      text: 'JS 복습하기',
      isCompleted: false,
    }
  ]

  this.todoInput = new TodoInput(document.querySelector('#header'));  

  this.todoList = new TodoList(document.querySelector('#todo-list'), data);

  const $todoList = document.querySelector('#todo-list')
    
  $todoList.addEventListener('click', e => {
    if (e.target.className === "todo-text") {
      data[e.target.id].isCompleted = true;
      this.todoList.setState(data)
    }
    else if (e.target.className === "todo-del-btn") {
      data.splice(e.target.id, 1)
      this.todoList.setState(data)
    }
  })

  const $todoAddBtn = document.querySelector('#todo-add-btn')
  const $todoInput = document.querySelector('#todo-input')

  $todoAddBtn.addEventListener('click', () => {
    addTodo();
  });
  $todoInput.addEventListener('keydown', e => {
    if (e.key === "Enter") {
      addTodo();
    }
  });

  addTodo = () => {
    if ($todoInput.value) {
      data.push({text: $todoInput.value, isCompleted: false});
      this.todoList.setState(data);
      $todoInput.value = '';
      $todoInput.focus();
    } else {
      throw new Error('할 일을 입력해주세요.');
    }
  }


}
