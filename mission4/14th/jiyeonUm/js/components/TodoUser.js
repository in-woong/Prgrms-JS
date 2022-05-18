import { loadUserListAPI, loadUserAPI } from '../api/api.js';

function TodoUser({ initialState, container, loadUserTodo, loadUserId }) {
  this.userId = initialState.selectUserId;
  this.target = null;

  this.render = () => {
    let userArticle = document.querySelector('#todoUserContainer');
    if (!userArticle) {
      userArticle = document.createElement('article');
      userArticle.id = 'todoUserContainer';
      container.append(userArticle);
    }

    loadUserListAPI({
      userList: (list) => {
        userArticle.innerHTML = `
          <ul>
            ${list.map((user) => `<li data-id="${user}">${user}</li>`).join('')}
          </ul>
        `;
      },
    });

    userArticle.addEventListener('click', (e) => {
      const selectUserId = e.target.dataset.id;
      if (this.target) this.target.style.textDecoration = 'none';
      loadUserAPI({
        userId: selectUserId,
        loadUser: (userTodo) => {
          loadUserId(selectUserId);
          loadUserTodo(userTodo);
        },
      });
      e.target.style.textDecoration = 'underline';
      this.target = e.target;
    });
  };
  this.setState = (user) => {
    this.userId = user;
  };
  this.render();
}
export default TodoUser;
