export default function TodoItemTemplate() {
  this.render = (todoItem) => `
                                <li data-id="${todoItem._id}" class="${todoItem._isCompleted ? 'completed' : ''}">
                                  <div class="view">
                                      <input class="toggle" type="checkbox" ${todoItem._isCompleted ? 'checked' : ''}>
                                      <label class="label">${todoItem._text}</label>
                                      <button class="delete"></button>
                                  </div>
                                </li>
                              `
}
