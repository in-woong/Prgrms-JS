export default function TodoInput({ $target, addTodo, removeAllTodo }) {
  this.$target = $target
  this.addTodo = addTodo;
  this.removeAllTodo = removeAllTodo;

  this.$form = document.createElement('form');
  this.$form.id = 'todo-form';
  this.$form.type = "submit";
  this.$target.appendChild(this.$form);

  this.$removeAllBtn = document.createElement('button');
  this.$removeAllBtn.innerText = '모두 삭제';
  this.$target.appendChild(this.$removeAllBtn);

  this.render = function() {
    this.$form.innerHTML = `
      <input type="text" name="todo-input" autofocus />
      <button type="submit" id="add-button">추가</button>
    `;
  };

  this.$form.addEventListener('submit', (e) => {
    e.preventDefault();

    const $input = document.querySelector('input[name=todo-input]');
    this.addTodo($input.value);
    $input.value = '';
  });

  this.$removeAllBtn.addEventListener('click', (e) => {
    this.$target.dispatchEvent(new CustomEvent('removeAll'));
  });

  this.render();
};
