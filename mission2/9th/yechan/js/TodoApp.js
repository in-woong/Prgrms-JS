import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'
import Validate from '../utils/Validate.js'
import {setItem, getItem, removeItem} from './Storage.js'

const STORAGE_KEY ={
    TODODATA : 'todoData'
}

export default class TodoApp{
    constructor($target){ 
        this.state=getItem(STORAGE_KEY.TODODATA)
        ?getItem(STORAGE_KEY.TODODATA)
        :[];
        
        this.todoInput = new TodoInput({
            $target,
            onInput: data=>{
                Validate(data);
                this.setInput(data)
                this.setCount(data)
            },
            onAllDelete: ()=>{
                removeItem('todoData')
                this.state = []
                this.setChange()
                this.setCount()
            }
        })
        this.todoList = new TodoList({
            $target,
            initialState : this.state,
            onChange: (INDEX)=>{
                if(this.state[INDEX].isCompleted){
                    this.state[INDEX].isCompleted = false
                }else{
                    this.state[INDEX].isCompleted = true
                }
                setItem(STORAGE_KEY.TODODATA,this.state)
                this.setCount()
                this.setChange()
            }
        })
        this.todoCount = new TodoCount({
            $target,
            initialState : this.state,
        })
    }

    setInput = (text)=>{
        const nextState =[...this.state,
        {
            text,
            isCompleted: false,
        }]
        setItem("todoData",nextState)
        this.state = nextState
        this.todoList.setState(this.state);
    }
    setCount = () =>{
        this.todoCount.setState(this.state)
    }
    setChange = ()=>{
        this.todoList.setState(this.state)
    }
}
