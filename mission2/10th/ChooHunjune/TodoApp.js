import TodoList from './Components/TodoList.js'
import TodoInput from './Components/TodoInput.js'
import TodoCount from './Components/TodoCount.js'


export default function TodoApp($app) {
  try {
    this.state = JSON.parse(localStorage.getItem('todolist-data'))
    if (this.state === null) {
      this.state = []
    }
  } catch (error) {
    console.error(error)
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.todoList.setState(this.state)
    this.todoCount.setState(this.state)

    localStorage.setItem('todolist-data', JSON.stringify(this.state))
  }

  // generate todoCount component
  const $todoCount = document.createElement('div')
  $todoCount.className = 'TodoCount'
  $app.appendChild($todoCount)

  this.todoCount = new TodoCount({
    $todoCount,
    initialState: this.state
  })

  
  // generate todoInput component
  const $todoInput = document.createElement('input')
  $app.appendChild($todoInput)
  const $todoListClearBtn = document.createElement('button')
  $todoListClearBtn.appendChild(document.createTextNode('전체삭제'))
  $app.appendChild($todoListClearBtn)
  const $todoInputAddBtn = document.createElement('button')
  $todoInputAddBtn.appendChild(document.createTextNode('추가'))
  $app.appendChild($todoInputAddBtn)

  $todoListClearBtn.addEventListener('click', () => {
    $app.dispatchEvent(new Event('removeAll'))
  })
  $app.addEventListener('removeAll', () => {
    if (confirm('모두 삭제하시겠습니까?')) {
      this.setState([])
    }
  })

  const $todoInputComponents = {$todoInput, $todoListClearBtn, $todoInputAddBtn}

  this.todoInput = new TodoInput({
    $todoInputComponents,
    onTodoInput: (text) => {
      const nextState = [
        ... this.state,
        {
          text,
          isCompleted: false
        },
      ]
      this.setState(nextState)
    },
  })
  

  // generate todoList component
  const $todoListItemComp = document.createElement('ul')
  $todoListItemComp.className = 'TodoList'
  $todoListItemComp.style = 'list-style: none'
  this.$todoListItemComp = $todoListItemComp
  $app.appendChild($todoListItemComp)

  this.todoList = new TodoList({
    $todoListItemComp,
    initialState: this.state,
    onClick: (index) => {
      const nextState = [... this.state]
      nextState[index] = {
        text: nextState[index].text,
        isCompleted: !nextState[index].isCompleted
      }
      this.setState(nextState)
    }
  })
}
