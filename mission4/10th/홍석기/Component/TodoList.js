export function TodoList({$target, data}) {
    let preData = data || [];

    this.render = () => {
      const htmlString = preData.map(function(todo) {
          const contentHTML = todo.isCompleted
            ? `<strike>${todo.content}</strike>`
            : `${todo.content}`
    
          return `<li data-id="${
            todo._id
          }">${contentHTML} <button class="remove-button">Remove</button></li>`
        })
      
        $target.innerHTML = `<ul>${htmlString.join('')}</ul>`;
    }
    
    this.render();

    this.setState = (nextData) => {
      preData = nextData;
      this.render();
    }
}