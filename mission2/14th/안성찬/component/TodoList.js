import validate from '../util/validate.js';

export default function TodoList({
  $target,
  $state,
  onRemoveTodoItem,
  onUpdateTodoStatus,
}) {
  if (!new.target) {
    throw new Error('updateList must be called with new');
  }

  validate($target, $state);

  this.state = $state;
  this.$target = $target;
  this.$element = document.createElement('div');
  this.$target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `
    <ul class="list-items">
    ${this.state
      .map((element, index) =>
        !element.isCompleted
          ? `<li data-index=${index}><span data-index=${index}>${element.text}</span> <button data-index=${index} class="btn-delete">X</button></li>`
          : `<li data-index=${index}><span data-index=${index}><s>${element.text}</s></span> <button data-index=${index} class="btn-delete">X</button></li>`
      )
      .join('')}</ul>`;

    this.$element
      .querySelector('.list-items')
      .addEventListener('click', (event) => {
        const target = event.target;
        const index = parseInt(target.parentNode.dataset.index);

        if (target.classList.contains('btn-delete')) {
          onRemoveTodoItem(index);
        } else if (
          target.parentNode.tagName === 'LI' ||
          target.parentNode.tagName === 'SPAN'
        ) {
          onUpdateTodoStatus(index);
        }
      });
  };
  this.render();

  this.setState = (nextData) => {
    this.state = nextData;
    this.render();
  };
}
