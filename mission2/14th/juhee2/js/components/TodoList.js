function checkDataValidation(data) {
  if (data == null || typeof data == 'undefined') {
    throw new Error('Data is Empty');
  }

  if (!Array.isArray(data)) {
    throw new Error('Data is not Array');
  }

  data.forEach((todo) => {
    if (!todo.hasOwnProperty('text') || !todo.hasOwnProperty('isCompleted'))
      throw new Error('Data does not have text or isCompleted properties.');
  });
}

function TodoList(data, $target) {
  checkDataValidation(data);

  if (!new.target) {
    throw new Error('use new keyword');
  }

  this.data = data;

  const $todo = document.createElement('div');
  $target.appendChild($todo);

  this.$todo = $todo;
  this.render = () => {
    const liTagStr = this.data.reduce(
      (accumulator, { text, isCompleted }) =>
        accumulator +
        (isCompleted ? `<li><s>${text}</s></li>` : `<li>${text}</li>`),
      ''
    );

    this.$todo.innerHTML = `<ul>${liTagStr}</ul>`;
  };

  this.setState = (nextData) => {
    this.data = nextData;
    this.render();
  };

  this.render();
}

export default {TodoList};
