import TodoInput from './TodoInput.js'; //확장자 필요
import TodoList from './TodoList.js';

function App() {

    this.data = [
        // {
        //     text: 'test1',
        //     isCompleted: true
        // },
        // {
        //     text: 'test2',
        //     isCompleted: false
        // },
        // {
        //     text: 'test3',
        //     isCompleted: true
        // }
    ];

    console.log(this.data);
    const localStorage = window.localStorage;
    localStorage.setItem('todoStorage', JSON.stringify(this.data));

    const $todoListWrap = document.querySelector('#todo-list');
    const btnDelete = document.querySelectorAll('.btnDeleteTodo');
    const btnDeleteAll = document.querySelector('#deleteAll');


    // 컴포넌트 인스턴스 생성
    const todoList = new TodoList(this, this.data, $todoListWrap);
    const todoInput = new TodoInput(this);


    // 추가된 데이터 받아서 새로 그리기
    this.addTodo = (newTodo) => {
        this.data.push(newTodo);
        todoList.setState(this.data);
        localStorage.setItem('todoStorage', JSON.stringify(this.data));
        // console.log(this.data);
    }

    // 삭제하는 데이터
    this.deleteTodo = (deleteIdx) => {
        this.data.splice(deleteIdx, 1);
        todoList.setState(this.data);
        localStorage.setItem('todoStorage', JSON.stringify(this.data));
    }

    //전체삭제
    this.deleteAll = () => {
        this.data = [];
        todoList.setState(this.data);
        localStorage.setItem('todoStorage', JSON.stringify(this.data));
    }
    btnDeleteAll.addEventListener('click', this.deleteAll);

    // 글자 클릭시 isCompleted수정
    this.onOffTodo = (key, onOff) => {
        this.data[key].isCompleted = !onOff;
        todoList.setState(this.data);
    }
}
export default App;
