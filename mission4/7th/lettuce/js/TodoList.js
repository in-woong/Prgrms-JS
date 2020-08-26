import { isValidData, isFunction } from './utils.js';

function TodoList($target, _data, toggleTodoById, deleteTodoById) {
  if (!(this instanceof TodoList)) {
    throw new Error("Create instance with 'new'");
  }
  if (!isValidData(_data)) {
    throw new Error('wrong data');
  }
  if (!isFunction(toggleTodoById)) {
    throw new Error('toggleTodoById is not a function');
  }
  if (!isFunction(deleteTodoById)) {
    throw new Error('deleteTodoById is not a function');
  }

  this.render = () => {
    const completedTodoHTML = this.data
      .filter(({ isCompleted }) => isCompleted)
      .map(
        ({ content, _id }) =>
          `<li class="todo" id="todo-${_id}" draggable="true"> 
                <span><s>${content}</s></span> 
                <button>Delete❌</button> 
           </li>`
      )
      .join(' ');

    const incompletedTodoHTML = this.data
      .filter(({ isCompleted }) => !isCompleted)
      .map(
        ({ content, _id }) =>
          `<li class="todo" id="todo-${_id}" draggable="true">
                <span>${content}</span>
                <button>Delete❌</button> 
           </li>`
      )
      .join(' ');

    this.$target.innerHTML = `
            <section>
              <h2>Incompleted Todo</h2>
              <ul class="todos"> ${incompletedTodoHTML} </ul>
            </section>

            <section>
              <h2>Completed Todo</h2>
              <ul class="todos"> ${completedTodoHTML} </ul>
            </section>
          `;
  };

  this.initEventListener = () => {
    this.$target.onclick = (event) => {
      const nodeName = event.target.nodeName;
      try {
        if (nodeName === 'SPAN' || nodeName === 'S') {
          const todoId = event.target.closest('li').id.split('-')[1];
          this.toggleTodoById(todoId);
        } else if (nodeName === 'BUTTON') {
          const todoId = event.target.closest('li').id.split('-')[1];
          this.deleteTodoById(todoId);
        }
      } catch (error) {
        console.log(error);
      }
    };

    this.$target.addEventListener('dragstart', (event) => {
      const nodeName = event.target.nodeName;
      if (nodeName !== 'LI') {
        event.preventDefault();
        return;
      }
      event.dataTransfer.setData('text/plain', event.target.id);
      event.dataTransfer.dropEffect = 'move';
    });

    this.$target.addEventListener('dragover', (event) => {
      const dropSection = event.target.closest('section');
      if (dropSection) {
        event.preventDefault();
      }
    });

    this.$target.addEventListener('drop', (event) => {
      event.preventDefault();

      const draggedId = event.dataTransfer.getData('text/plain');
      const draggedElem = document.getElementById(draggedId);
      const draggedSection = draggedElem.closest('section');

      const dropSection = event.target.closest('section');

      if (draggedSection === dropSection) {
        console.log('same section');
        return;
      }

      try {
        const todoId = draggedId.split('-')[1];
        this.toggleTodoById(todoId);
      } catch (error) {
        console.log(error);
      }
    });
  };

  this.setState = (nextData) => {
    if (!isValidData(nextData)) {
      throw new Error('wrong nextData');
    }
    this.data = nextData;
    this.render();
  };

  this.$target = $target;
  this.data = _data;
  this.toggleTodoById = toggleTodoById;
  this.deleteTodoById = deleteTodoById;

  this.render();
  this.initEventListener();
}

export default TodoList;
