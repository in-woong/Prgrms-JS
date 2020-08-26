import {addTodo,fetchUsers,deleteTodo,updateTodo,fetchData} from './api.js';
import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import Users from './Users.js';
import Loading from './Loading.js'
function App() {
  let that = this;
  that.username = 'doraemong'
  this.userList= new Users({
    user:this.users,
    onClickUser: (username) => {
      this.setState(username)
    }
  });
  this.todoList = new TodoList({
    target: document.querySelector('#todo-list'),
    data: '',
    onClick: async function(id) {
      await updateTodo(that.username,id);
      that.setState(that.username)
    },
    onRemove: async function(id) {
      await deleteTodo(that.username,id);
      that.setState(that.username)
    },
  })
  this.todoInput = new TodoInput({
    $target:document.querySelector('#todo-input'),
    onAddTodo: async(addText)=>{
      const text = await addTodo('doraemong',addText);
    }
  })
  this.loading = new Loading({
    isLoading:this.isloading
  })
  this.setState=async(username)=>{
    that.loading.setState(true);
    let data = await fetchData(username);
    that.todoList.setState(data);
    that.loading.setState(false);
  }
  this.init = async () => {
    this.users = await fetchUsers()
    this.isLoading = false
    this.userList.render(this.users)
  }
  this.init()
  document
    .querySelector('#add-todo-button')
    .addEventListener('click', async function() {
      const todoText = document.querySelector('#todo-input').value
        that.setState(that.username)
      }
    )
}
new App();