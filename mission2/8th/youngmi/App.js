import TodoInput from './TodoInput.js'; //확장자 필요
import TodoList from './TodoList.js';

function App() {

    this.data = [{
        text: 'test1',
        isCompleted: true
    },
    {
        text: 'test2',
        isCompleted: false
    },
    {
        text: 'test3',
        isCompleted: true
    }];

    const $todoListWrap = document.querySelector('#todo-list');
    const btnDelete = document.querySelectorAll('.btnDeleteTodo');


    // 컴포넌트 인스턴스 생성
    const todoList = new TodoList(this, this.data, $todoListWrap);
    const todoInput = new TodoInput(this);


    // 추가된 데이터 받아서 새로 그리기
    this.addTodo = (newTodo) => {
        this.data.push(newTodo);
        todoList.setState(this.data);
        // console.log(this.data);
    }

    // 삭제하는 데이터
    this.deleteTodo = (deleteIdx) => {
        this.data.splice(deleteIdx, 1);
        todoList.setState(this.data);
    }

    // 글자 클릭시 isCompleted수정
    this.onOffTodo = (key, onOff) => {
        if (onOff === 'strike') {
            this.data[key].isCompleted = false;
            todoList.setState(this.data);
            // console.log(this.data);
        } else if (onOff === 'text') {
            this.data[key].isCompleted = true;
            todoList.setState(this.data);
            // console.log(this.data);
        }
    }
}

new App();

