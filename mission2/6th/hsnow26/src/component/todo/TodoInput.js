import * as filters from '../../utils/todo/filerter_item.js'

export default function TodoInput($app, onAddTodo){
    const $todoInput = $app.querySelector('#todo-input')
    const $todoAddBtn = $app.querySelector('#todo-add-btn')
    
    this.init = () => {
        $todoAddBtn.addEventListener('click', () => filters.addTodoEvent($todoInput, onAddTodo)) //추가 버튼 클릭
        $todoInput.addEventListener('keypress', e => (e.key === 'Enter') ? filters.addTodoEvent(e.target, onAddTodo) : "") //엔터
    }

    this.init()
}
