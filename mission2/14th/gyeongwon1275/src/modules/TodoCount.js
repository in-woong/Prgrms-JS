export default class TodoCount {
  constructor({ $container, state, listen }) {
    this.render({ $container, state });
    listen(() => {
      this.render({ $container, state });
    });
  }

  render({ $container, state }) {
    document.querySelector('section.todo-count')?.remove();
    const todoList = state.getState();
    $container.insertAdjacentHTML(
      'beforeEnd',
      `<section class="todo-count">
      <h2>TodoCount</h2>
      <div> <label>총 Todo의 갯수</label>${
        todoList.length
      }<span class="total-todo-count"></span></div>
      <div><label>완료 Todo의 갯수</label>${
        todoList.filter(({ isCompleted }) => isCompleted).length
      }<span class="complete-todo-count"></span></div>
  </section>
`
    );
  }
}
