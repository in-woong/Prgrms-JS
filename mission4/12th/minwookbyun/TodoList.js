export default function TodoList({
   $target, initialState, onToggleTodoItem, onRemoveTodo
}) { 
    this.$target= document.querySelector('.section_todolist')
    this.$todoList = document.createElement('ul');
    this.$target.appendChild(this.$todoList);

    this.onToggleTodoItem = onToggleTodoItem;
    this.onRemoveTodo = onRemoveTodo;

    this.state = initialState;

    // 이벤트 핸들러 감싸기 or not 
    this.$todoList.addEventListener('click', (e) => {
      const listId = e.target.closest('li').id
        if(e.target.className === 'btn-remove') {
          this.onRemoveTodo(listId);
        }
        if(e.target.className === 'toggle'){
          this.onToggleTodoItem(listId)
        }
    });

    this.render = () => {
      console.log(this.state.todos)
      let htmlString = this.state.todos.map(
       (todo) => `<li id=${todo._id} class="complete_${todo.isCompleted}">
       <s class="toggle"> ${todo.content}</s> 
       <button class="btn-remove">❌</button>
       </li>`
     )
     .join('')
     this.$todoList.innerHTML = htmlString
   }

   this.setState = function (nextState) {
    this.state = nextState
    this.render()
}

    this.render()
}
