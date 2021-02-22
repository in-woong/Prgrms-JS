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

  document.querySelector('#todoInput').addEventListener('keydown', (e) => {
    if(e.code == 'Enter') {
      todoData.push(
        {
          text: document.querySelector('#todoInput').value,
          isCompleted: false,
        }
      )
      todoList.render()
      document.querySelector('#todoInput').value = ''
    }
  })


  