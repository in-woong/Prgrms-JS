export default class TodoList {
  constructor({ $container, state, onClick, listen }) {
    this.render({ $container, state });

    this.setEventListener(onClick);
    listen(() => {
      this.render({ $container, state });
      this.setEventListener(onClick);
    });
  }

  render({ $container, state }) {
    document.querySelector('section.todo-list')?.remove();

    $container.insertAdjacentHTML(
      'beforeEnd',
      `<section class="todo-list">
      <h2>TodoList</h2>
      ${`<ul>${state
        .getState()
        .map(
          ({ text, isCompleted }, key) =>
            isCompleted
              ? `<li key=${key}><s>${text}</s></li>`
              : `<li key=${key}>${text} <button>완료</button></li>`
        )
        .join('')}</ul>`}
  </section>`
    );
  }

  setEventListener(onClick) {
    const $listWrapper = document.querySelector('section.todo-list');

    $listWrapper.addEventListener('click', onClick);
  }
}
