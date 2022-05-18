export default class TodoInput {
  constructor({ $container, onSubmit }) {
    this.render($container);
    this.setEventListener(onSubmit);
  }

  getTodo(text = '') {
    return {
      text,
      isCompleted: false,
    };
  }

  render($container) {
    $container.insertAdjacentHTML(
      'beforeEnd',
      `<section class="todo-form">
      <h2>TodoInput</h2>
    <form >
      <label for="todo" class="screen-reader-only">Todo 등록</label>
      <input type="text" id="todo" required/>
      <button type="submit" >등록</button>
    </form>
    <button type="click" name='remove-all'>전부삭제</button>
  </section>
`
    );
  }

  setEventListener(onSubmit) {
    const $form = document.querySelector('form');
    const $input = document.querySelector('input#todo');
    const $button = document.querySelector('[name="remove-all"]');

    $form.addEventListener('submit', event => {
      event.preventDefault();

      onSubmit($input, this.getTodo);
    });

    $button.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('removeAll'));
    });
  }
}
