import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';

export default function App($target){
    this.dataList = [];
    this.$target = $target;

    this.addTodo = (txt) => {
        this.dataList.push({
            txt,
            isCompleted : false
        })
      
        this.render()
    }

    this.render = function(){
        this.todoList.render();
    }
    
    this.todoList = new TodoList(this.$target,this.dataList)
    this.todoInput = new TodoInput(this.$target,this.addTodo)
}
