const TodoList = function(data, strikeTemplateCreator) {
  return data.reduce((totalEl, { text, isCompleted }, index) => {
    const isCheckbox = isCompleted ? 'checked' : ''

    return (totalEl += `
            <li data-todo-id="${index}">
              <input type="checkbox" ${isCheckbox}>
                ${strikeTemplateCreator({
                  text,
                  predicate: isCompleted,
                })}
              </input>
            </li>
          `)
  }, '<ul style="list-style: none;">')
}

export default TodoList
