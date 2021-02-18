const todoData = [
    {
      text: 'JS 공부하기',
      isCompleted: false,
    },
    {
      text: 'JS 복습하기',
      isCompleted: false,
    },
  ]

  const wishData = [
    {
      text: '옷',
      isCompleted: true,
    },
    {
      text: '신발',
      isCompleted: false,
    },
  ]

  const shoppingData = [
    {
      text: '감자',
      isCompleted: true,
    },
    {
      text: '고구마',
      isCompleted: false,
    },
  ]

  const todoCompletedData = [
    {
      text: 'JS 공부하기',
      isCompleted: true,
    },
    {
      text: 'JS 복습하기',
      isCompleted: true,
    },
  ]

  const errorCheck = (data, element) => {
    if (!data) {
      throw new Error('data is null or undefined')
    }

    if (!Array.isArray(data)){
      throw new Error('data is not an Array')
    }
    
    const isValidData = data.every(({ text }) => typeof text === 'string')

    if (!isValidData) {
      throw new Error('Text가 string이 아닙니다.')
    }

    if (!element) {
      throw new Error('element를 찾을 수 없습니다.')
    }
  }
  
  const todoList = new TodoList(todoData, document.querySelector('#todo-list'))
  const wishList = new TodoList(wishData, document.querySelector('#wish-list'))
  const shoppingList = new TodoList(shoppingData, document.querySelector('#shopping-list'))

  setTimeout(() => {
    todoList.setState(todoCompletedData)
  }, 3000)
  