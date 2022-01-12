export default function TodoAllDelete({$target, onAllDelete}) {
  this.$target = $target;
  this.$button = document.createElement('button');
  this.$button.className = 'todo-list__button todo-list__button--delete-all-todo';
  this.$button.dataset.action = 'all-delete';

  this.render = () => {
    this.$button.innerText = `전부 삭제`;
    this.$target.appendChild(this.$button);
  }

  this.bindEvents = () => {
    this.$button.addEventListener('click', onAllDelete)
  }

  this.render();
  this.bindEvents();
}
