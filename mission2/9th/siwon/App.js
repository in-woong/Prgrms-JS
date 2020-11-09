import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';

// TodoInput과 TodoList를 관리하는 APP Component
export default function App(initialData) {
    let data = initialData;

    const $todoInput = document.querySelector("#todo-input");
    const $todoList = document.querySelector("#todo-list");
    const $todoCount = document.querySelector("#todo-count");
    const $btnClear = document.querySelector("#btn-clear");

    // input으로 입력한 todo를 추가하는 함수
    this.addTodo = (newTodo) => {
        data.push({ text: newTodo, isCompleted: false });
        this.todoList.setState(data);
        this.todoCount.countCompleted(data);
    }

    // 특정 index의 todo를 삭제하는 함수
    this.deleteTodo = (index) => {
        data.splice(index, 1);
        this.todoList.setState(data);
        this.todoCount.countCompleted(data);
    }

    // 특정 index의 todo의 완료여부를 변경하는 함수
    this.toggleTodo = (index) => {
        data[index].isCompleted = !data[index].isCompleted;
        this.todoList.setState(data);
        this.todoCount.countCompleted(data);
    }

    this.clearTodo = () => {
        data.splice(0, data.length);
        this.todoList.setState(data);
        this.todoCount.countCompleted(data);
    }

    const clearEvent = new CustomEvent('clearAll');
    $btnClear.addEventListener('click', (e) => {
        $todoList.dispatchEvent(clearEvent);
    });

    $todoList.addEventListener('clearAll', () => {
        this.clearTodo();
    })

    this.todoInput = new TodoInput($todoInput, this.addTodo);
    this.todoList = new TodoList(data, $todoList, this.deleteTodo, this.toggleTodo);
    this.todoCount = new TodoCount(data, $todoCount);
}
