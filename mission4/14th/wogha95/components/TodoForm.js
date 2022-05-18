import { TODOFORM_ERROR } from "../util/Error.js";

export default function ({ $target, addTodo }) {
  try {
    if(!new.target) throw new Error(TODOFORM_ERROR);
  
    const $fragment = document.createDocumentFragment();  
    const $form = document.createElement('form');
    const $input = document.createElement('input');
    const $addButton = document.createElement('button');
    const $removeAllButton = document.createElement('button');
  
    $addButton.innerText = '추가';
    $removeAllButton.innerText = '전체삭제';
  
    $form.appendChild($input);
    $form.appendChild($addButton);
    $form.appendChild($removeAllButton);
    $fragment.appendChild($form);
  
    $form.addEventListener('submit', event => {
      event.preventDefault();      
      const content = $input.value.trim();
      if(content.length > 0) {
        addTodo(content);    
        $input.value = '';
        $input.focus();
      }
    })

    const removeAllTodo = () => {
      window.dispatchEvent(new CustomEvent('RemoveAllEvent'));
    }

    $removeAllButton.addEventListener('click', removeAllTodo);
  
    this.render = () => {
      $target.appendChild($fragment);
    }
  
    this.render();    
  } catch (error) {
    console.log(error);
  }
}