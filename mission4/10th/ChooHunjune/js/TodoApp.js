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
      alert(e)
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


  this.todoCount = new TodoCount({
    $app,
    initialState: this.state
  })


  this.todoInput = new TodoInput({
    $app,
    onTodoInput: async (text) => {
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
        await addTodoItemAPI(this.state.user, text)
        this.init()
      } catch (e) {
        alert(e)
      }
      this.setState(nextState)
    },
  })
  
  $app.addEventListener('removeAll', async () => {
    if (confirm('모두 삭제하시겠습니까?')) {
      const emptyState = {
        ... this.state,
        todoItems: [],
      }
      try {
        await clearTodoListAPI(this.state.user)
      } catch (e) {
        alert(e)
      }
      this.setState(emptyState)
    }
  })


  this.todoList = new TodoList({
    $app,
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
        alert(e)
      }
      this.setState(nextState)
    }
  })
  
  this.init()
}
