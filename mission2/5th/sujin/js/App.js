import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'

const myStorage = window.localStorage;

function App(TodoList) {
    const $removeAllBtn = document.querySelector('#remove-all-btn')
    const todoCount = new TodoCount()

    this.setStorage = () => {
        TodoList.data.forEach(TodoItem => {
            myStorage.setItem(TodoItem.text, TodoItem.isCompleted);
        })
    }
    
    // this.loadStorage = () => {

    // }

    this.removeStorage = (index) => {
        myStorage.removeItem(TodoList.data[index].text);
    }

    this.resetStorage = () => {
        myStorage.clear();
    }

    this.addStorage = (text, isCompleted) => {
        myStorage.setItem(text, isCompleted)
    }

    this.init = () => {
        this.todoInput = new TodoInput(this.addTodo, this.toggleTodo, this.removeTodo)
        this.bindEvent()
    }

    this.render = () => {
        TodoList.render() 
        todoCount.setState(TodoList)
    }
    
    this.addTodo = (inputText) => {
        const newTodo = {
            text: inputText,
            isCompleted: false
        }
        
        TodoList.data.push(newTodo)
        TodoList.setState(TodoList.data)
        todoCount.setState(TodoList)
        this.addStorage(newTodo.text, newTodo.isCompleted)
    }
    
    this.removeTodo = (index) => {
        this.removeStorage(index)
        TodoList.data.splice(index, 1)
        TodoList.setState(TodoList.data)
        todoCount.setState(TodoList)
        
    }

    this.toggleTodo = (index) => {
        TodoList.data[index].isCompleted = !TodoList.data[index].isCompleted
        TodoList.setState(TodoList.data)
        todoCount.setState(TodoList)
    }

    this.bindEvent = () => {
        $removeAllBtn.addEventListener('click', e => this.onClickAllRemove(e))
    }

    this.onClickAllRemove = (e) => {
        const event = new CustomEvent('reset', { detail: $removeAllBtn.innerHTML })

        $removeAllBtn.addEventListener('reset', function(e) {
            //내용 전체 삭제
            TodoList.setState([])
            todoCount.setState(TodoList)
            
        })

        $removeAllBtn.dispatchEvent(event)
        this.resetStorage()
    }

    this.init()
    
}
export default App
