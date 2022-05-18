import { checkData } from '../../util/checkData.js';
import { createEl } from '../../util/createEl.js';

export function TodoList({ $target, initialState, onClick, onRemove }) {
  this.state = initialState;
  this.$todoSectionEl = createEl('section', 'todo-list-section');
  $target.appendChild(this.$todoSectionEl);

  if (!new.target)
    throw new Error('TodoList is not supposed to be instantiated directly');

  this.setState = function (nextState) {
    this.state = nextState;
    this.redner();
  };

  this.redner = function () {
    $target.querySelector('.todo-list')?.remove();

    this.$todoListEl = createEl('ul', 'todo-list');
    this.$todoSectionEl.appendChild(this.$todoListEl);

    const markup = this.state
      .map((todo) => {
        return this.generateMarkup(todo);
      })
      .join('');
    this.$todoListEl.insertAdjacentHTML('afterbegin', markup);
  };

  this.generateMarkup = function ({ content, isCompleted, _id }) {
    return `
    <li draggable="true" data-index=${_id}>
    ${isCompleted ? `<del>${content}</del>` : content}
    <button>❌</button>
    </li>
    `;
  };

  this.$todoSectionEl.addEventListener('click', (e) => {
    const $li = e.target.closest('li');

    if ($li !== null) {
      const { index } = $li.dataset;
      if (e.target.tagName === 'BUTTON') {
        onRemove(index);
      } else if (e.target.tagName === 'LI') {
        onClick(index);
      }
    }
  });
  this.$todoSectionEl.addEventListener('dragstart', (e) => {
    const index = e.target.dataset.index;

    e.dataTransfer.setData('text/plain', JSON.stringify({ index }));
  });

  this.$todoSectionEl.addEventListener('dragover', (e) => {
    e.preventDefault();
    const $container = e.target.closest('div');

    $container.classList.add('over');
  });

  this.$todoSectionEl.addEventListener('dragleave', (e) => {
    e.preventDefault();
    const $container = e.target.closest('div');

    $container.classList.remove('over');
  });

  this.$todoSectionEl.addEventListener('drop', async (e) => {
    e.preventDefault();

    const data = e.dataTransfer.getData('text/plain');
    const { index } = JSON.parse(data);
    onClick(index);
  });

  this.redner();
}
