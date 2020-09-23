import TodoInput from './TodoInput.js'; //확장자 필요
import TodoList from './TodoList.js';
import * as api from './api.js';

function App() {

    this.data = [];
    
    const $todoListWrap = document.querySelector('#todo-list');
    const btnDeleteAll = document.querySelector('#deleteAll');


    // 컴포넌트 인스턴스 생성
    const todoList = new TodoList(this, this.data, $todoListWrap);
    const todoInput = new TodoInput(this);

    this.fetchTodos = async() => {
        const data = await api.getTodos('youngmi'); 
        //console.log(data); // 윗줄에 await을 안썼더니 promise로 반환됨...꼭 썼어야했음
        this.setState(data); 
    }

    // 추가된 데이터 받아서 새로 그리기
    this.addTodo = async (newTodo) => {
        await api.addTodo(newTodo); 
        this.fetchTodos();
    }
    
    // 삭제하는 데이터
    this.deleteTodo = async (deleteId) => {
        await api.deleteTodo(deleteId);
        this.fetchTodos();
    }
    
    //전체삭제
    this.deleteAll = async () => {
        await api.deleteAll()
        this.fetchTodos();
    }
    btnDeleteAll.addEventListener('click', this.deleteAll);
    
    // 글자 클릭시 isCompleted수정
    this.onOffTodo = async (toggleId) => {
        await api.toggleTodo(toggleId)
        this.fetchTodos();
    }
    
    this.setState = (data) => {
        this.data = data;
        this.render();
    }
    
    this.render = () => {
        todoList.setState(this.data);
    }
    this.fetchTodos();
}

export default App;
