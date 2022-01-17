export default function TodoInput({$target, onSubmit}) {
  this.target = $target;
  this.$todoInput = document.createElement('form');
  this.$todoInput.id = 'todo-list__submit-form';
  this.onSubmit = onSubmit;

  this.render = () => {
    this.$todoInput.innerHTML = `
      <input type="text" placeholder="할 일을 입력하세요."/>
    `

    this.target.appendChild(this.$todoInput);
  }

  this.bindEvents = () => {
    this.$todoInput.addEventListener('submit', (e) => {
      this.onSubmit(e);
    });
  }

  this.render();
  this.bindEvents();
}
