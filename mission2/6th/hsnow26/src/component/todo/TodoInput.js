import {addTodoEvent} from '../../utils/todo/filerter_item.js'

export default function TodoInput(onAddTodo){
    const $todoInput = document.querySelector('#todo-input')
    const $todoAddBtn = document.querySelector('#todo-add-btn')
    
    this.init = () => {
        $todoAddBtn.addEventListener('click', () => addTodoEvent($todoInput, onAddTodo)) //추가 버튼 클릭
        $todoInput.addEventListener('keypress', e => {//엔터
            if(e.key === 'Enter'){
                addTodoEvent(e.target, onAddTodo)
            }
        })
    }

    this.init()
}
