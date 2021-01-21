import { checkNewKeyword, checkTarget, checkTodoListData } from '../validation.js';

export default function TodoList({ data, $dragTarget, $todoList, deleteTodo, toggleTodo }) {
  const validation = () => {
    checkNewKeyword(new.target);
    checkTarget($todoList);
    checkTodoListData(data);
  };

  validation();
  this.data = data;
  this.$todoList = $todoList;

  this.render = () => {
    const htmlString = this.data.map((data) => (
      data.isCompleted
        ? `<li data-id=${data._id} draggable="true">
            <s> ${data.content} </s> 
            <button> x </button>
          </li>`
        : `<li data-id=${data._id} draggable="true">
            <span> ${data.content} </span>
            <button> x </button>
         </li> `
    )).join('\n');
    this.$todoList.innerHTML = `<ul>${htmlString}</ul>`;
  };

  this.bindEvent = () => {
    $todoList.addEventListener('click', (e) => {
      const { id } = e.target.parentNode.dataset;
      if (e.target.tagName === 'BUTTON') {
        deleteTodo(id);
      }
      if (e.target.tagName === 'SPAN' || e.target.tagName === 'S') {
        toggleTodo(id);
      }
    });
    $todoList.addEventListener('dragstart', (e) => {
      if (e.target.tagName === 'LI') {
        e.dataTransfer.setData('text', e.target.dataset.id);
      }
    });
    $dragTarget.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    $dragTarget.addEventListener('drop', (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData('text');
      e.target.appendChild(document.querySelector(`[data-id="${id}"]`));
      toggleTodo(id);
    });
  };

  this.setState = (data) => {
    checkTodoListData(data);
    this.data = data;
    this.render();
  };

  this.render();
  this.bindEvent();
}
