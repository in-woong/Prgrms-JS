const defaultData = [
    {
      id: 1,
      text: 'JS 공부하기',
      isCompleted: false
    },
    {
      id: 2,
      text: 'JS 복습하기',
      isCompleted: true
    }
  ]

function App() {
    this.init = function() {
        this.data = defaultData
        this.todoList = new TodoList(
            this.data,
            document.getElementById('todo-list'),
            )
        this.todoInput = new TodoInput(
            this.todoList,
            (todoText) => {
                const nextData = [
                    ...this.todoList.data,
                    {
                        id: this.todoList.data.length + 1,
                        text: todoText,
                        isCompleted: false
                    }
                ]
                this.setState(nextData)
            },
            document.getElementById('todo-input')
        )
        this.deleteTodo = new DeleteTodo(
            this.todoList,
            this.onDeleteButton
        )
        this.toggle = new ToggleTodoComplete(
            this.todoList,
            this.onToggle
        )
    }

    this.setState = function(nextData) {
        this.todoList.data = nextData
        this.todoList.render()
    }

    this.onDeleteButton = function(deleteId) {
        const nextData = this.todoList.data.filter(item => item.id != deleteId)
        this.setState(nextData)
    }

    this.onToggle = function(data, selectedId) {
        this.data = data
        console.log('selectedId  ' + selectedId)
        const filteredData = this.data.filter(item => item.id !== selectedId)
        const selectedData = this.data.filter(item => item.id === selectedId)
        console.log('selectedData '+selectedData)
        return [...filteredData,
                {
                    id: selectedId,
                    text: selectedData.text,
                    isCompleted: !selectedData.isCompleted
                }
            ]
    }

    this.init()
}