import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import TodoRemoveAll from './TodoRemoveAll.js';

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

    this.render = () => {
        this.todoList.render();
        this.todoCount.render();
    }

    $target.addEventListener('removeAll', (e) => {
        this.dataList.length=0;
        //this.dataList = [] 하면 안된다. 얕은 복사, 깊은 복사
        this.render();
    })
    
    this.todoList = new TodoList(this.$target,this.dataList,this.toggleCompleted)
    this.todoCount = new TodoCount(this.$target,this.dataList)
    this.todoInput = new TodoInput(this.$target,this.addTodo)
    this.todoRemoveAll = new TodoRemoveAll(this.$target)
}
