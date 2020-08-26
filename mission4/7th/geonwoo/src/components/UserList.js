import { bindEvent } from '../utils/index.js';
class UserList {
  constructor(target, loadTodoList) {
    this.$target = target;
    this.userList = [];

    bindEvent(this.$target, 'click', async (e) => {
      if (e.target.tagName === 'UL') return;
      await loadTodoList(e.target.textContent);
    });
  }

  setState(newUserList) {
    if (this.userList === newUserList) return;

    this.userList = newUserList;
    this.render();
  }
  render() {
    this.$target.innerHTML = this.userList
      .map((user) => `<li>${user}</li>`)
      .join('');
  }
}

export default UserList;
