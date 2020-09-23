import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js'

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

    this.toggleCompleted = (idx) => {
        this.dataList[idx].isCompleted = !this.dataList[idx].isCompleted;
        this.todoCount.render();
    }

    this.render = function(){
        this.todoList.render();
        this.todoCount.render();
    }
    
    this.todoList = new TodoList(this.$target,this.dataList,this.toggleCompleted)
    this.todoCount = new TodoCount(this.$target,this.dataList)
    this.todoInput = new TodoInput(this.$target,this.addTodo)
}
