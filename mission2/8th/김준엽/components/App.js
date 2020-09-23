import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import TodoRemoveAll from './TodoRemoveAll.js';

export default function App($target) {
    this.dataList = window.localStorage.getItem('todo') ?
        JSON.parse(window.localStorage.getItem('todo')) : [];
    this.$target = $target;

    this.addTodo = (txt) => {
        this.dataList.push({
            txt,
            isCompleted: false
        })
        this.render()
    }

    this.delTodo = (idx) => {
        this.dataList.splice(idx, 1);
        this.render();
    }

    this.toggleCompleted = (idx) => {
        this.dataList[idx].isCompleted = !this.dataList[idx].isCompleted;
        this.render();
    }

    this.render = () => {
        this.saveLocalStorage(this.dataList);
        this.todoList.render();
        this.todoCount.render();
    }

    $target.addEventListener('removeAll', (e) => {
        this.dataList.length = 0;
        //this.dataList = [] 하면 안된다. 얕은 복사, 깊은 복사
        this.render();
    })

    this.saveLocalStorage = (newData) => {
        window.localStorage.setItem('todo', JSON.stringify(newData));
    }

    this.todoList = new TodoList(this.$target, this.dataList, this.toggleCompleted, this.delTodo)
    this.todoCount = new TodoCount(this.$target, this.dataList)
    this.todoInput = new TodoInput(this.$target, this.addTodo)
    this.todoRemoveAll = new TodoRemoveAll(this.$target)
}