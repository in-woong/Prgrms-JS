import { checkNewKeyword, checkTarget, checkUserListData } from '../validation.js'

export default function UserList($userList, users, loadTodo) {
  const validation = () => {
    checkNewKeyword(new.target);
    checkTarget($userList);
    checkUserListData(users);
  };

  validation();
  this.users = users;
  this.$userList = $userList;

  this.render = () => {
    const htmlString = this.users.map((user) => `<li>${user}</li>`).join('\n');
    this.$userList.innerHTML = htmlString;
  };

  this.setState = (newUsers) => {
    checkUserListData(newUsers);
    this.users = newUsers;
    this.render();
  };

  this.bindEvent = () => {
    $userList.addEventListener('click', (e) => {
      const { innerText, tagName } = e.target;
      if (tagName === 'LI') {
        loadTodo(innerText);
      }
    });
  };

  this.setState(users);
  this.bindEvent();
};
