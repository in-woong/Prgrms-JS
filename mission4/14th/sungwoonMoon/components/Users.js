export default function Users({ $target, initialState, getUserTodos }) {
  this.state = initialState || {};

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.$usersTitle = document.createElement('h1');
  this.$usersTitle.textContent = '- USERS';
  this.$usersUL = document.createElement('ul');
  $target.appendChild(this.$usersTitle);
  $target.appendChild(this.$usersUL);

  this.$userTodosTitle = document.createElement('h1');
  this.$userTodosUL = document.createElement('ul');
  $target.appendChild(this.$userTodosTitle);
  $target.appendChild(this.$userTodosUL);

  this.renderLoader = () => {
    this.$usersTitle.innerHTML = '';
    this.$usersUL.innerHTML = `<h1>불러오는 중...</h1>`;

    this.$userTodosTitle.innerHTML = '';
    this.$userTodosUL.innerHTML = '';
  };

  this.render = () => {
    const { users, selectedUserName, userTodos } = this.state;
    this.$usersUL.innerHTML = users
      .map((userName) => `<li><button>${userName}</button></li>`)
      .join('');

    if (selectedUserName) {
      this.$userTodosTitle.textContent = `- ${selectedUserName}님의 TODO LIST`;

      this.$userTodosUL.innerHTML = userTodos
        .map(({ content, isCompleted }) => {
          const todoContent = isCompleted ? `<s>${content}</s>` : content;
          return `<li>${todoContent}</li>`;
        })
        .join('');
    }
  };

  this.$usersUL.addEventListener('click', function (event) {
    const { nodeName } = event.target;
    if (nodeName === 'BUTTON') {
      const {
        target: { innerText },
      } = event;

      getUserTodos(innerText);
    }
  });

  this.render();
}
