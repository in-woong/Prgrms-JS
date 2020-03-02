import { $ } from "./util.js";

export default function TodoUsers(users, getfetchData) {
  this.$usersList = $("#users-list");
  this.users = users;

  this.getfetchData = getfetchData;
  this.setState = nextData => {
    this.users = nextData;
    this.render();
  };

  this.onClick = async e => {
    const username = e.target.textContent;
    await this.getfetchData(username);
    await this.render(username);
  };

  this.render = username => {
    const innerText = this.users.reduce((acc, currentValue, index) => {
      const user =
        currentValue !== username
          ? `<li id=${index} class="user">${currentValue}</li>`
          : `<li id=${index} class="clicked-user">${currentValue}</li>`;
      acc += user;
      return `${acc}`;
    }, "");
    this.$usersList.innerHTML = `<ul>${innerText}</ul>`;
    this.$usersList.addEventListener("click", this.onClick);
  };
}
