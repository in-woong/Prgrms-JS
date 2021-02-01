let todoListComponent = new todoList(data, document.querySelector('#todo-list'))
new todoList(data2, document.querySelector('#todo-list-2'))
new todoList(data3, document.querySelector('#todo-list-3'))

// testcase
// todoList(data)
// new todoList([1,2,3,4])
// new todoList(null)

setTimeout(() => {
  todoListComponent.setState([
    {
      text: 'ReasonML',
      isCompleted: false,
    },
    {
      text: 'lerna',
      isCompleted: false,
    },
  ])
}, 3000)
