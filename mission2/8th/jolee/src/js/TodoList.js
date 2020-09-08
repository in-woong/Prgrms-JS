function TodoList(data, targetElement) {
  try {
    if (!(this instanceof TodoList)) {
      throw new Error('[invalid] list is not new')
    }
    checkValidation(data)

    this.data = data
    this.targetElement = targetElement

    this.setState = function (nextData) {
      this.data = nextData
      this.render()
    }

    this.render = function () {
      let htmlString = ''
      this.data.forEach((data, index) => {
        htmlString += `<li key=${index} class="todo-item">${
          data.isCompleted ? `<s>${data.text}</s>` : `${data.text}`
        } <button type="button" class="todo-delete-button">삭제</button></li>`
      })
      this.targetElement.innerHTML = htmlString
    }

    this.render()
  } catch (e) {
    alert(e.message)
  }
}

function addNewTodoItem(todoListComponent) {
  const todoListData = [... todoList.data]

  const newTodoItem = {
    text: todoItemInput.value,
    isCompleted: false,
  }

  todoListData.push(newTodoItem)
  todoListComponent.setState([... todoListData])
}

function deleteTodoItem(todoListComponent, key) {
  const todoListData = [... todoList.data]
  todoListData.splice(key, 1)
  todoListComponent.setState([... todoListData])
  
}

function changeStatus(todoListComponent, key) {
  const todoListData = [... todoList.data]
  if(todoListData[key].isCompleted) {
    todoListData[key].isCompleted = false
  } else {
    todoListData[key].isCompleted = true
  }

  todoListComponent.setState([... todoListData])
}

function checkValidation(data) {
  this.data = data
  // 재사용을 위해 별도 함수로 생성
  if (this.data === null || this.data === undefined) {
    throw new Error('[invalid] list is null or undefined')
  }
  if (!Array.isArray(this.data)) {
    throw new Error('[invalid] list is not array')
  }
  this.data.some(({ isCompleted, text }) => {
    if (
      text === undefined ||
      typeof text !== 'string' ||
      isCompleted === undefined ||
      typeof isCompleted !== 'boolean'
    ) {
      throw new Error('[invalid] missing text in list')
    }
  })
}
