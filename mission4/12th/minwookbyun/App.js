import {
    fetchTodoList,
    fetchUserList,
} from "./Information/API.js";
import TodoContainer from "./Todocontainer.js";
import UserContainer from "./Usercontainer.js";


export default function App($target) {
    const USERNAME = 'Boram'

    this.init = async () => {
        this.$target = $target

        this.state = await this.updatedTodos(USERNAME)
        
        this.todoContainer = new TodoContainer({
            $target: this.$target.querySelector('.section_todolist'),
            state: this.state,
            setState: this.setState,
            updatedTodos: this.updatedTodos,
          })

        this.userContainer = new UserContainer({
            $target,
            initialState: this.state,
            setState: this.setState,
            updatedTodos: this.updatedTodos,
          })
        }

    this.updatedTodos = async (username) => {      
        const todos = await fetchTodoList(username);
        const userList = await fetchUserList();
        const nextState = {
            ...this.state,
            userList,
            todos,
            username,
        }
        return nextState
    }

    this.setState = (nextState) => {
        this.state = nextState;
        this.todoContainer.setState(this.state);
        this.userContainer.setState(this.state);
    }

    this.init()
}
