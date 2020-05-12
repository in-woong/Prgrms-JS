import * as filters from '../../utils/todo/filerter_item.js'

export default function TodoInput(todoInput, todoAddBtn, addTodo){
    
    this.init = () => {
        todoAddBtn.addEventListener('click', (e) => filters.addTodoEvent(todoInput, addTodo)) //추가 버튼 클릭
        todoInput.addEventListener('keypress', e => (e.key === 'Enter') ? filters.addTodoEvent(e.target, addTodo) : "") //엔터
    }

    this.init()
}
