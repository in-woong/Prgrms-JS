import { fetchUsersFromServer } from './api.js';
import { isFunction } from './utils.js';

function Users($target, onClickUserBtn) {
  if (!(this instanceof Users)) {
    throw new Error("Create instance with 'new'");
  }
  if (!isFunction(onClickUserBtn)) {
    throw new Error('onClickUserBtn is not a function');
  }

  this.$target = $target;

  this.userList = [];

  this.setState = (nextUserList) => {
    this.userList = nextUserList;
    this.render();
  };

  this.render = () => {
    const userHTML = this.userList
      .map((user) => `<button>${user}</button>`)
      .join('');
    this.$target.innerHTML = `<ul> ${userHTML} </ul>`;
  };

  this.bindEvents = () => {
    this.$target.addEventListener('click', (event) => {
      const nodeName = event.target.nodeName;
      if (nodeName === 'BUTTON') {
        onClickUserBtn(event.target.innerText);
      }
    });
  };

  this.render();
  this.bindEvents();

  fetchUsersFromServer().then((userList) => this.setState(userList));
}

export default Users;
