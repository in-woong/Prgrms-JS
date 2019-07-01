const TODO_INPUT = 'todo-input';

function TodoForm(params) {
  const $target = params.$target;
  const onSubmit = params.onSubmit;
  $target.addEventListener('submit', e => {
    e.preventDefault();
    onSubmit($target[TODO_INPUT].value);
    $target.reset();
  });
}



export default TodoForm;
