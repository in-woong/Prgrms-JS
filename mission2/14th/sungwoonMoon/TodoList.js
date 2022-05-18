import Todo from './Todo.js';

export default function TodoList(root, data, onChange) {
  if (!new.target) throw new Error('error new 키워드 확인');

  this.data = data;
  validation(this.data);

  this.ul = document.createElement('ul');
  this.ul.addEventListener('click', (event) => {
    const { nodeName } = event.target;
    if (nodeName === 'BUTTON') {
      const [className, id] = event.target.id.split('_');
      if (className === 'status') {
        for (const target of data) {
          if (id == target.id) {
            target.isCompleted = !target.isCompleted;
            this.setState(data);
          }
        }
      } else if (className === 'delete') {
        data.forEach((target, index) => {
          if (id == target.id) {
            data.splice(index, 1);
            this.setState(data);
          }
        });
      }
    }
  });

  this.render = function () {
    this.ul.innerHTML = '';

    this.data.forEach((todo) => this.ul.appendChild(Todo(todo)));

    root.appendChild(this.ul);
  };

  this.setState = function (newData) {
    this.data = newData;
    validation(this.data);

    onChange(this.data);

    this.render();
  };

  this.render();
}

function validation(data) {
  if (!data) throw new Error('error data null 혹은 undeifned');
  if (!Array.isArray(data)) throw new Error('error data array 아님');

  for (const todo of data) {
    if (!todo.hasOwnProperty('text') || !todo.hasOwnProperty('isCompleted')) {
      throw new Error('error data 이상함');
    }
  }
}
