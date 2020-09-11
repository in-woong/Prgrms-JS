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
    const todoList = new TodoList(app, this.data, $todoListWrap);
    const todoInput = new TodoInput(this);

    // 추가된 데이터 받아서 새로 그리기
    this.addTodo = (newTodo) => {
        this.data.push(newTodo);
        todoList.setState(this.data);
        console.log(this.data);
    }

    //삭제 
    this.deleteTodo = e => {
        if (e.target.className === 'btnDeleteTodo') {
            const deleteIdx = e.target.getAttribute('key');
            this.data.splice(deleteIdx, 1);
            todoList.setState(this.data);
        }
    }
    $todoListWrap.addEventListener('click', this.deleteTodo);

}

new App();

