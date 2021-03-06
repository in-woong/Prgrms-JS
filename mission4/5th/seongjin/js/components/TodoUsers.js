import { $ } from "../util/index.js";
import { SELECTOR } from "../constants/index.js";

export default function TodoUsers(users, getfetchData) {
  this.$usersList = $(SELECTOR.USERS_LIST);
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
    const innerText = this.users.reduce((htmlString, currentValue, index) => {
      const user =
        currentValue !== username
          ? `<li id=${index} class="user">${currentValue}</li>`
          : `<li id=${index} class="clicked-user">${currentValue}</li>`;
      htmlString += user;
      return `${htmlString}`;
    }, "");
    this.$usersList.innerHTML = `<ul>${innerText}</ul>`;
    this.$usersList.addEventListener("click", this.onClick);
  };
}
