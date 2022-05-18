export default function TodoList({ $container, state, onClick }) {
  this.render = state => {
    $container.querySelector('ul')?.remove();

    $container.insertAdjacentHTML(
      'beforeEnd',
      `<ul>${state
        .getState()
        .todo.map(
          ({ content, isCompleted, _id }) =>
            isCompleted
              ? `<li key=${_id}><s>${content}</s></li>`
              : `<li key=${_id}>${content} <button>완료</button></li>`
        )
        .join('')}</ul>`
    );

    $container.addEventListener('click', onClick);
  };

  this.render(state);
}
