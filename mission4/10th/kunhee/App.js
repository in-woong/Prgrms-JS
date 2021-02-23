import TodoList from './TodoList.js'
import UserList from './UserList.js'
import ExecuteApi from './api.js'
//import TodoInput from './TodoInput.js'

export default function App(){
    (async function () {
        let ClickedName = 'roto';
        async function fetchData(name) {
          ClickedName = name;
          const res = await ExecuteApi().requestRead(name);
          return res;
        }
        const data = await fetchData("roto");


        const userData = await ExecuteApi().requestUserRead();
        const userList = new UserList({
            $target: document.querySelector('#user-list'),
            data: userData,
            onClick: async function (name) {
                const updatedData = await fetchData(name);
                todoList.setState(updatedData);
            },
        });


        const todoList = new TodoList({
            $target: document.querySelector('#todo-list'),
            data: data,
            onClick: async function (id) {
              await ExecuteApi().requestUpdate(id,ClickedName);
              // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
              const updatedData = await fetchData(ClickedName);
              todoList.setState(updatedData);
            },
            onRemove: async function (id) {
              await ExecuteApi().requestDelete(id,ClickedName);
              // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
              const updatedData = await fetchData(ClickedName);
              todoList.setState(updatedData);
            },
        });
          document
          .querySelector('#add-todo-button')
          .addEventListener('click', async function () {
            const todoText = document.querySelector('#todo-input').value;
            if (todoText.length > 0) {
              // 데이터 추가하기
              await ExecuteApi().requestCreate(todoText,ClickedName);
              // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
              const updatedData = await fetchData(ClickedName);
              todoList.setState(updatedData);
            }
          });
    })()
} 
