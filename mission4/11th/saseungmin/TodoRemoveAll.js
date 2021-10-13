class TodoRemoveAll {
  constructor({ target, onClick }) {
    this.$target = document.querySelector(target);
    this.handleClick = onClick;
    this.bindClickEvent();
  }

  bindClickEvent() {
    this.$target.addEventListener('click', this.handleClick);
  }
}

export default TodoRemoveAll;
