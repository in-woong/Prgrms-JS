
import TodoList from './component/todoList.js'
import TodoInput from './component/todoInput.js'
import TodoCount from './component/todoCount.js'

/**
 * 
 * @param {Element} $app 
 * @param {Array} initialState 
 */

export default function App($app, initialState) {
  this.state = initialState

  this.todoInput = new TodoInput({
    $app,
    onTodoInput: (text) => { //text는 input의 값
      const nextState = [ // 값 복사하고 인풋의 값을 함수로 넣기
        ...this.state,
        {
          text,
        },
      ]

      this.setState(nextState)
    },
  })
  this.todoList = new TodoList({
    $app,
    initialState: this.state,
    onClick: (index) => {
      const nextState = [...this.state]
      nextState[index] = {
        text: nextState[index].text,
        isCompleted: !nextState[index].isCompleted,
      }

      this.setState(nextState)
    },
  })

  this.todoCount = new TodoCount({
    $app,
    initialState: this.state,
  })

  this.setState = (nextState) => {
    this.state = nextState
    this.todoList.setState(this.state)
    this.todoCount.setState(this.state)

    localStorage.setItem('todo', JSON.stringify(this.state))
  }
}
