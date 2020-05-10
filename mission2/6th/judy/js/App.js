function App() {
  this.data = [
    {
      text: 'JS 공부하기',
      isCompleted: true
    },
    {
      text: 'JS 복습하기',
      isCompleted: true
    },
  ]

  this.render = () => {
    const $list = document.querySelector('#todo-list');
    this.todoList = new TodoList($list, this.data);
    const $input = document.querySelector("#todo-input");
    this.todoInput = new TodoInput($input, {
      onAddTodo: (text) => {
        const nextData = [
          ...this.data,
          {
            text
          }
        ]
        this.setState(nextData)
      }
    })
    const $total = document.querySelector('#todo-total');
    this.todoCount = new TodoCount($total, this.data.length);
  }

  this.setState = (nextData) => {
    this.data = nextData
    this.todoList.setState(nextData)
    this.todoCount.setState(nextData.length)
  }

  this.render();

}





