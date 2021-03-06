const defaultData = [
  {
    id: 0,
    text: 'JS 공부하기',
    isCompleted: false,
  },
  {
    id: 1,
    text: 'JS 복습하기',
    isCompleted: true,
  },
]

function App() {
  this.data = defaultData

  this.init = function() {
    this.todoList = new TodoList(
      document.getElementById('todo-list'),
      this.data,
      {
        onTodoDelete: deleteId => {
          const nextData = this.data.filter(item => item.id != deleteId)
          this.setState(nextData)
        },
      },
      {
        onTodoToggle: toggleId => {
          const nextData = this.data
          nextData[toggleId].isCompleted = !this.data[toggleId].isCompleted
          this.setState(nextData)
        },
      }
    )
    this.todoInput = new TodoInput(document.getElementById('todo-input'), {
      onTodoInput: todoText => {
        const nextData = [
          ...this.data,
          {
            id: this.data.length,
            text: todoText,
            isCompleted: false,
          },
        ]
        this.setState(nextData)
      },
    })
  }

  this.setState = function(nextData) {
    this.data = nextData
    this.todoList.setState(nextData)
  }

  this.init()
}
