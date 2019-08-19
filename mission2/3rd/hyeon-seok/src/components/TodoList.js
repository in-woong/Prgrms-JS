const TodoList = function({ data, strkieTemplate }) {
  return data.reduce((totalEl, { text, isCompleted }, index) => {
    const isCheckbox = isCompleted ? 'checked' : ''

    return (totalEl += `
            <li
              class="todo__item"
              data-todo-id="${index}">
              <input
                class="toggle__checkbox"
                type="checkbox"
                ${isCheckbox}
              >
                ${strkieTemplate({
                  text,
                  predicate: isCompleted,
                })}
              <button class="delete__button">
                X
              </button>
            </li>
          `)
  }, '<ul style="list-style: none;">')
}

export default TodoList
