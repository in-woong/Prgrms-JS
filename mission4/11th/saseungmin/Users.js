class Users {
  constructor({ target, onClick }) {
    this.$target = document.querySelector(target);
    this.handleClick = onClick;
    this.bindClickEvent();
  }

  bindClickEvent() {
    this.$target.addEventListener('click', (e) => {
      const userName = e.target.closest('li').innerText;

      this.handleClick(userName);
    });
  }

  render(users) {
    const userList = users.map((user) => `<li>${user}</li>`);

    this.$target.innerHTML = `<ul>${userList.join('')}</ul>`;
  }
}

export default Users;
