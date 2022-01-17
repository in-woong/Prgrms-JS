export default function Users ({$target, userList, selectedUser, onSelect}) {
  this.target = $target;
  this.userList = userList
  this.selectedUser = selectedUser;
  this.onSelect = onSelect;

  this.$users = document.createElement('nav');
  this.$users.id = 'user-list';

  this.state = { 
    serList: this.userList,
    selectedUser: this.selectedUser 
  };

  this.render = () => {
    this.$users.innerHTML = `
      <ul>
        ${this.state.userList
          .map(user => 
              `<li
                class="user-list__user ${user === this.state.selectedUser ? `selected` : ``}"
                data-id=${user}>${user}
              </li>` 
          )
          .join('')}
      </ul>  
    `
    this.target.appendChild(this.$users);
  }

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
    this.$users.addEventListener('click', this.onSelect);
  }
}
