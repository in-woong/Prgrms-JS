import TodoInput from './TodoInputs.js'; //확장자 조심!
import TodoList from './TodoList.js';

export default function App($target) {
    this.data = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : []

    if (!new.target) {
        throw new Error('new를 쓰지 않아서 this가 window입니다!');
    }

    function checkDataType() {
        // comment 반영
        if (data == undefined || (data === null)) {
            throw new Error('유효하지 않은 데이터 값입니다. data를 확인해주세요!!')
        }
        if (!Array.isArray(data)) {
            throw new Error("데이터 형태가 배열이 아닙니다!!")
        }
    }


    this.savingLocal = (newUserInput) => {
        localStorage.setItem('localstorage', JSON.stringify(newUserInput));
    }

    this.addItem = (text) => {
        if (text.trim().length > 0) {
            this.data.push({
                text,
                isCompleted: false
            });
            this.savingLocal(this.data);
        }
        if (text.trim().length === 0) {
            alert('할 일을 한 글자 이상 입력해주세요!😉')
        }
        this.render()
    }

    this.removeTodo = (index) => {
        this.data.splice(index, 1);
        this.savingLocal(this.data);
        this.render();
    }

    this.changeStauts = (index) => {
        this.data[index].isCompleted = !this.data[index].isCompleted;
        this.savingLocal(this.data);
        this.render()
    }

    this.render = function () {
        this.todoList.render();
    }

    this.todoList = new TodoList(this.data, $target, this.removeTodo, this.changeStauts);
    this.todoInput = new TodoInput($target, this.addItem)
}
