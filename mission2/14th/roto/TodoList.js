export default function TodoList({ $target, initialState, onClick, onRemove }) {
  this.$element = document.createElement('ul');
  $target.appendChild(this.$element);

  this.state = initialState;

  this.render = function () {
    this.$element.innerHTML = this.state
      .map(
        (todo, index) => `<li data-index="${index}">
        ${todo.isCompleted ? `(완료) ${todo.text}` : todo.text}
        <button>❌</button>
      </li>`
      )
      .join('');
  };

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render();

  this.$element.addEventListener('click', (e) => {
    const $li = e.target.closest('li');

    if ($li !== null) {
      const { index } = $li.dataset;
      const parsedIndex = parseInt(index);
      if (e.target.tagName === 'BUTTON') {
        onRemove(parsedIndex);
      } else if (e.target.tagName === 'LI') {
        onClick(parsedIndex);
      }
    }
  });
}
