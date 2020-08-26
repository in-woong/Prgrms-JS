import {
  checkTarget,
  checkNode,
  checkTypeFunction,
} from '../utils/validator.js';
import { NODE } from '../utils/constant.js';

function UserList({ $target, users, chosenUser, onShowUserTodo }) {
  this.init = () => {
    checkTarget($target);
    checkNode(NODE.SECTION);
    checkTypeFunction(onShowUserTodo);

    this.$target = $target;
    this.users = users;
    this.chosenUser = chosenUser;

    this.bindEvents();
    this.render();
  };

  this.bindEvents = () => {
    this.$target.addEventListener('click', this.onClick);
  };

  this.onClick = (e) => {
    if (e.target.nodeName !== 'LI') return;
    const userName = e.target.textContent;

    onShowUserTodo(userName);
  };

  this.render = () => {
    this.$target.innerHTML = `<ul>${this.getUserListHTML(this.users)}</ul>`;
  };

  this.getUserListHTML = (users) => {
    return users
      .map((userName) => {
        return userName === this.chosenUser
          ? `<li class="user active-user">${userName}</li>`
          : `<li class="user">${userName}</li>`;
      })
      .join('');
  };

  this.setState = (nextState) => {
    this.users = nextState.users;
    this.chosenUser = nextState.chosenUser;

    this.render();
  };

  this.init();
}

export default UserList;
