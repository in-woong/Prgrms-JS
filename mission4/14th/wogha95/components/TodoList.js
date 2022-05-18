import CreateElement from '../util/CreateElement.js';
import { validateTodoList } from "../util/Validation.js";
import { TODOLIST_ERROR } from "../util/Error.js";

export default function ({ initialState, $target, toggleTodo, deleteTodo, dragTodo, dropTodo }) {
  try {
    if(!new.target) throw new Error(TODOLIST_ERROR);
  
    this.state = validateTodoList(initialState);
  
    this.setState = (nextState) => {
      this.state = validateTodoList(nextState);
      this.render();
    }
  
    const onClick = (event) => {
      const tagName = event.target.tagName;
      const todoId = event.target.parentElement.id;
      if(tagName === 'SPAN') toggleTodo(todoId);
      else if(tagName === 'BUTTON') deleteTodo(todoId);
    }

    const onDrag = (event) => {
      event.preventDefault();
      const todoId = event.target.closest('li').id;
      dragTodo(todoId);
    }

    const onDragOver = (event) => {
      event.preventDefault();
    }

    const onDrop = (event) => {
      event.preventDefault();
      const $drop = event.target.closest('#todo-list') || event.target.closest('#todo-list-completed');
      dropTodo($drop.id);
    }
    
    const getListHtml = () => {
      const $ul = CreateElement('ul');
      for(const {content, isCompleted, _id} of this.state) {
        const $li = CreateElement('li', 'id', _id, 'draggable', 'true');
        const $span = CreateElement('span');
        const $deleteBtn = CreateElement('button');
  
        $li.id = _id;
        $span.innerText = content;
        $deleteBtn.innerText = '삭제';
  
        if(isCompleted) $span.classList.add('done');
        $li.appendChild($span);
        $li.appendChild($deleteBtn);
        $ul.appendChild($li);
      }
      $ul.addEventListener('click', onClick);
      $ul.addEventListener('drag', onDrag);
      $ul.addEventListener('dragover', onDragOver);
      $ul.addEventListener('drop', onDrop);
      return $ul;
    }
  
    this.render = () => {
      if($target.hasChildNodes()) $target.removeChild($target.firstChild);
      $target.appendChild(getListHtml());
    }
  
    this.render();
  } catch (error) {
    console.log(error);
  }
}