import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'

function App(TodoList) {
    const $removeAllBtn = document.querySelector('#remove-all-btn')
    const todoCount = new TodoCount()

    this.init = function (){
        this.todoInput = new TodoInput(this.addTodo, this.toggleTodo, this.removeTodo)
        this.bindEvent()
    }

    this.render = function () {
        TodoList.render() 
        todoCount.setState(TodoList)
    }

    this.addTodo = function (inputText) {
        const newTodo = {
            text: inputText,
            isCompleted: false
        }
        TodoList.data.push(newTodo)
        TodoList.setState(TodoList.data)
        todoCount.setState(TodoList)
    }

    this.removeTodo = function (index) {
        TodoList.data.splice(index, 1)
        TodoList.setState(TodoList.data)
        todoCount.setState(TodoList)
    }

    this.toggleTodo = function (index) {
        TodoList.data[index].isCompleted = !TodoList.data[index].isCompleted
        TodoList.setState(TodoList.data)
        todoCount.setState(TodoList)
    }

    this.bindEvent = function () {
        $removeAllBtn.addEventListener('click', e => this.onClickAllRemove(e))
    }

    this.onClickAllRemove = function (e) {
        const event = new CustomEvent('reset', { detail: $removeAllBtn.innerHTML })

        $removeAllBtn.addEventListener('reset', function(e) {
            //내용 전체 삭제
            TodoList.setState([])
            todoCount.setState(TodoList)
        })

        $removeAllBtn.dispatchEvent(event)
    }

    this.init()
    
}
export default App
