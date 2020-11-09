import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';

// TodoInput과 TodoList를 관리하는 APP Component
export default function App(initialData) {
    let data = initialData;

    const $todoInput = document.querySelector("#todo-input");
    const $todoList = document.querySelector("#todo-list");

    this.todoInput = new TodoInput($todoInput, this);
    this.todoList = new TodoList(data, $todoList, this);

    // input으로 입력한 todo를 추가하는 함수
    this.addTodo = (newTodo) => {
        data.push({ text: newTodo, isCompleted: false });
        console.log(data);
        this.todoList.setState(data);
    }

    // 특정 index의 todo를 삭제하는 함수
    this.deleteTodo = (index) => {
        data.splice(index, 1);
        this.todoList.setState(data);
        console.log(data);
    }

    // 특정 index의 todo의 완료여부를 변경하는 함수
    this.toggleTodo = (index) => {
        data[index].isCompleted = !data[index].isCompleted;
        this.todoList.setState(data);
        console.log(data);
    }
}
