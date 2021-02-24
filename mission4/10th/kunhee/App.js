import TodoList from './TodoList.js'
import UserList from './UserList.js'
import ExecuteApi from './api.js'
import TodoInput from './TodoInput.js';

export default function App() {
  this.ClickedName = '';
  this.fetchData = async (name) => {
      this.ClickedName = name;
      const res = await ExecuteApi().requestRead(name);
      return res;
  }
    
  (async () => {

      //UserList 렌더링
      const userData = await ExecuteApi().requestUserRead();
      const data = await this.fetchData("roto");

      this.userList.setState(userData);
      this.todoList.setState(data);
   })()


  this.userList = new UserList({
    $target: document.querySelector('#user-list'),
    onClick: async (name) => {
      this.todoList.loading(name); //로딩중
      const updatedData = await this.fetchData(name); //다시그리기
      this.todoList.setState(updatedData);
    },
  });

  this.todoList = new TodoList({
    $target: document.querySelector('#todo-list'),
    onClick: async (id) => {
      await ExecuteApi().requestUpdate(id, this.ClickedName);
      const updatedData = await this.fetchData(this.ClickedName); //다시그리기F
      this.todoList.setState(updatedData);
    },
    onRemove: async (id) => {
      await ExecuteApi().requestDelete(id, this.ClickedName);
      const updatedData = await this.fetchData(this.ClickedName); //다시그리기
      this.todoList.setState(updatedData);
    },
  });

  this.todoInput = new TodoInput({
    $target: document.querySelector('#todo-input'),
    onClick: async (todoText) => {
      if (todoText.length > 0) {
        // 데이터 추가하기
        await ExecuteApi().requestCreate(todoText, this.ClickedName);
        // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
        const updatedData = await this.fetchData(this.ClickedName); //다시그리기
        this.todoList.setState(updatedData);
      }
    },
  })
}