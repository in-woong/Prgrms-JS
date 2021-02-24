import TodoList from './TodoList.js'
import UserList from './UserList.js'
import ExecuteApi from './api.js'
import TodoInput from './TodoInput.js';
/*npx http-server -c -1*/
export default function App() {
  this.state = {
    todos: [],
    isLoading: false,
    userList: [],
    activeUser: 'roto'
  }

  this.fetchData = async () => {
    const res = await ExecuteApi().requestRead(this.state.activeUser);
    return res;
  }

  this.setState = (newState) => {
    this.state = newState;
    this.todoList.setState(this.state);
  }

  this.userList = new UserList({
    $target: document.querySelector('#user-list'),
    data: this.state,
    onClick: async (name) => {
      this.setState({
        ...this.state,
        isLoading: true,
        activeUser:name,
      });
      const data = await this.fetchData();
      this.setState({
        ...this.state,
        todos: data,
        isLoading: false,
      });
    },
  });

  this.todoList = new TodoList({
    $target: document.querySelector('#todo-list'),
    data: this.state,
    onClick: async (id) => {
      await ExecuteApi().requestUpdate(id, this.state.activeUser);
      const data = await this.fetchData();
      this.setState({
        ...this.state,
        todos: data,
      });
    },
    onRemove: async (id) => {
      await ExecuteApi().requestDelete(id, this.state.activeUser);
      const data = await this.fetchData();
      this.setState({
        ...this.state,
        todos: data,
      });
    },
  });

  this.todoInput = new TodoInput({
    $target: document.querySelector('#todo-input'),
    onClick: async (todoText) => {
      if (todoText.length > 0) {
        // 데이터 추가하기
        await ExecuteApi().requestCreate(todoText, this.state.activeUser);
        const data = await this.fetchData();
        this.setState({
          ...this.state,
          todos: data,
        });
      }
    },
  })

  //init
  const init = async () => {
    try {
      //userlist
      const userData = await ExecuteApi().requestUserRead();
      this.userList.setState({
        userList: userData,
      }) //userlist 렌더링

      //todolist
      const data = await this.fetchData();
      this.setState({
        ...this.state,
        todos: data,
      })
    } catch (e) {

    }
  }
  init()
}