import { checkNewKeyword, checkTarget } from '../validation.js'

export default function TodoListTitle($todoListTitle) {
  const validation = () => {
    checkNewKeyword(new.target);
    checkTarget($todoListTitle);
  };

  validation();
  this.$todoListTitle = $todoListTitle;
  this.currentUser = '';

  this.render = () => {
    this.$todoListTitle.innerText = `${this.currentUser}'s Todo List`;
  };

  this.setState = (user) => {
    this.currentUser = user;
    this.render();
  };
}
