import { getAllUsers } from '../util/api.js';

export default function UserList(appElement) {
  this.init = async () => {
    this.element = document.createElement('ul');
    this.element.id = 'user-list';
    
    const users = await getAllUsers();
    
    if (users) {
      this.state = users
      
      appElement.appendChild(this.element);

      this.render(users);
    }
  }

  this.render = (data) => {
    if (data) {
      this.element.innerHTML = `${data.map((username) => {
        return `<li id="${username}">${username}</li>`
      }).join('')}`
    }
  }

  this.displayTodoUser = (element) => {
    element.style.background = 'black';
    element.style.color = 'white';
  }

  this.hideTodoUser = (element) => {
    element.style.background = 'white';
    element.style.color = 'black';
  }

  this.init();
}