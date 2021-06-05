import { $ } from './utils.js'
import { todoAppTemplate } from './DOM.js'
import TodoInput from "./TodoInput.js"
import TodoList from "./TodoList.js"


const data = [
    {
      text: 'JS 공부하기',
      isCompleted: false,
    },
    {
      text: 'JS 복습하기',
      isCompleted: false,
    },
    {
      text: 'JS 과제하기',
      isCompleted: true,
    }
  ]


export default class TodoApp{
    constructor($target, $id){
        this.target = $($target);
        this.id = $id;

        this.target.innerHTML = todoAppTemplate();
        
        this.todoList = new TodoList(data, $id);
        this.todoInput = new TodoInput(this.todoList);
    }
}