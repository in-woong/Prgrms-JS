import * as filters from '../../utils/todo/filerter_item.js'

export default function TodoInput(onAddTodo){
    const $todoInput = document.querySelector('#todo-input')
    const $todoAddBtn = document.querySelector('#todo-add-btn')
    
    this.init = () => {
        $todoAddBtn.addEventListener('click', () => filters.addTodoEvent($todoInput, onAddTodo)) //추가 버튼 클릭
        $todoInput.addEventListener('keypress', e => (e.key === 'Enter') ? filters.addTodoEvent(e.target, onAddTodo) : "") //엔터
    }

    this.init()
}
