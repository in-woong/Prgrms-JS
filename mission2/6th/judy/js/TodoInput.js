const ENTER_KEY = 13

function TodoInput($target, { onAddTodo }) {
  $target.addEventListener('keydown', e => {
    if (e.keyCode === ENTER_KEY) {
      if (e.target.value === 'undefined' || e.target.value === null || e.target.value === '') {
        alert("해야 할 일을 입력해주세요.");
      } else {
        onAddTodo(e.target.value);
        e.target.value = "";
      }
    }
  });
}