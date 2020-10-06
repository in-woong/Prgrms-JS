import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import Users from './Users.js'
import {
    getTodos,
    postTodo,
    deleteTodo,
    removeAll,
    toggleIsCompleted,
} from '../Util/api.js'

import { isValidData } from '../Util/valid.js'

export default function App($target, defaultUserName) {
    
    this.init = async () => {
        this.data = {
            curUser: defaultUserName,
            todos: await getTodos(defaultUserName)
        }    
        this.components = {
            todoInput: new TodoInput($target, this.onAddTodo, this.onRemoveAllTodo),
            todoList: new TodoList($target, this.data, this.onRemoveTodo, this.onToggleCompleted),
            todoCount: new TodoCount($target, this.data),
            users: new Users($target, this.data, this.onClickUserList)
        }
    }
    
    this.onAddTodo = async (text) => {
        await postTodo(this.data.curUser, text);

        const newTodos = await getTodos(this.data.curUser);
        this.setState({
            ...this.data,
            todos: newTodos
        });
    }

    this.onRemoveTodo = async (idx) => {
        const deleteId = this.data.todos[idx]._id;
        await deleteTodo(this.data.curUser, deleteId);

        const newTodos = await getTodos(this.data.curUser);
        this.setState({
            ...this.data,
            todos: newTodos
        });
    }

    this.onToggleCompleted = async (idx) => {
        const toggleId = this.data.todos[idx]._id;
        await toggleIsCompleted(this.data.curUser, toggleId);
        
        const newTodos = await getTodos(this.data.curUser);
        this.setState({
            ...this.data,
            todos: newTodos
        });
    }

    this.onRemoveAllTodo = async () => {
        await removeAll(this.data.curUser);

        const newTodos = await getTodos(this.data.curUser);
        this.setState({
            ...this.data,
            todos: newTodos
        });   
    }

    this.onClickUserList = async (newUser) => {
        const newTodos = await getTodos(newUser);
        this.setState({
            todos: newTodos,
            curUser: newUser
        });
    }

    this.setState = (nextData) => {
        isValidData(nextData.todos);
        this.data = nextData;
        this.components.todoList.setState(nextData);
        this.components.todoCount.setState(nextData);
        this.components.users.setState(nextData);
        this.render();
    }

    this.render = () => {}

    this.init();
    
}
