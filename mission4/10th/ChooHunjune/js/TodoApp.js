import { 
  fetchTodoItemAPI, 
  addTodoItemAPI, 
  delTodoItemAPI, 
  clearTodoListAPI, 
  toggleTodoItemAPI,
} from './utils/api.js'
import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'


export default function TodoApp($app, initialUser) {
  this.state = {
    isLoading: false,
    user: initialUser,
    todoItems: [],
  }

  this.init = async () => {
    this.setState({
      ... this.state,
      isLoading: true,
    })

    try {
      this.fetchedTodoItems = await fetchTodoItemAPI(this.state.user)
    } catch (e) {
      console.error(e)
    }
    this.setState({
      ... this.state,
      todoItems: this.fetchedTodoItems,
      isLoading: false,
    })
  }


  this.setState = (nextState) => {
    this.state = nextState
    this.todoList.setState(this.state)
    this.todoCount.setState(this.state)
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
      const emptyState = {
        ... this.state,
        todoItems: [],
      }
      try {
        (async () => {await clearTodoListAPI(this.state.user)})()
      } catch (e) {
        console.error(e)
      }
      this.setState(emptyState)
    }
  })

  const $todoInputComponents = {$todoInput, $todoListClearBtn, $todoInputAddBtn}

  this.todoInput = new TodoInput({
    $todoInputComponents,
    onTodoInput: (text) => {
      const nextState = {
        ... this.state,
        todoItems: [
          ... this.state.todoItems,
          {
            content: text,
            isCompleted: false,
            _id: null
          },
        ]
      }
      try {
        (async () => {await addTodoItemAPI(this.state.user, text)})()
        this.init()
      } catch (e) {
        console.error(e)
      }
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
      const nextState = {... this.state}
      nextState.todoItems[index] = {
        content: nextState.todoItems[index].content,
        isCompleted: !nextState.todoItems[index].isCompleted,
        _id: nextState.todoItems[index]._id
      }
      try {
        (async () => {await toggleTodoItemAPI(this.state.user, nextState.todoItems[index]._id)})()
      } catch (e) {
        console.error(e)
      }
      this.setState(nextState)
    }
  })
  
  this.init()
}
