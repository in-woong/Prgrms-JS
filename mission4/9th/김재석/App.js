import InputTodo from "./component/InputTodo.js"
import TodoList from "./component/TodoList.js"
import UserList from "./component/UserList.js"
import Title from "./component/Title.js"
import {addTodo_api, loadTodo_api, deleteTodo_api, toggleComplete_api, getUserList_api} from "./api.js"

export default function App($target) {
    if(!new.target) {throw new Error('new가 선언되지 않았습니다.')}

    this.target = document.querySelector($target)
    this.state = []
    this.users = []
    this.user = 'roto'

    this.addTodo = async (todo) => {
        await addTodo_api(this.user, todo)
        this.setState()
    }

    this.delTodo = async (todo_id) => {
        await deleteTodo_api(this.user, todo_id)
        this.setState()
    }

    this.toggleComp = async (todo_id) => {
        await toggleComplete_api(this.user, todo_id)
        this.setState()
    }

    this.setState = async () => {
        this.loading(this.TodoList.target)
        this.state = await loadTodo_api(this.user)
        this.TodoList.setState(this.state)
    }

    this.getUsers = async () => {
        this.users = await getUserList_api()
        this.UserList.setUsers(this.users)
    }

    this.changeUser = (selUser) => {
        this.user = selUser
        this.setState()
        this.Title.setTitle(this.user)
    }
    
    this.loading = ($target) => {
        $target.innerHTML = "로딩중..."
    }

    this.Title = new Title(this.target)
    this.InputTodo = new InputTodo(this.target, this.addTodo)
    this.TodoList = new TodoList(this.target, this.state, this.delTodo, this.toggleComp)
    this.UserList = new UserList(this.target, this.changeUser)
    
    //초기화
    this.setState()
    this.getUsers()
    this.Title.setTitle(this.user)

}
