const hasOwnProperty = (data) => (property) => Object.prototype.hasOwnProperty.call(data, property);

const isCorrectValue = ({ text, isCompleted }) => text && typeof isCompleted === 'boolean';

const isObject = (value) => typeof value === 'object' && value !== null;

const todosValidation = (todos) => {
  if (!todos) {
    throw new Error('Data does not exist.');
  }

  if (!Array.isArray(todos)) {
    throw new Error('todos is not an Array.');
  }

  todos.forEach((todo) => {
    const has = hasOwnProperty(todo);

    if (!isObject(todo)) {
      throw new Error('todo item is not object');
    }

    if (!has('text') || !has('isCompleted')) {
      throw new Error('todo item should have "text" or "isCompleted" properties');
    }

    if (!isCorrectValue(todo)) {
      throw new Error('todo item is not correct value');
    }
  });
};

export default todosValidation;
