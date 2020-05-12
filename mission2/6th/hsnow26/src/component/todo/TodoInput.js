import * as filters from '../../utils/todo/filerter_item.js'

export default function TodoInput(todoInputHTML, todoAddBtnHTML, addTodo){
    this.init = () => {
        todoAddBtnHTML.addEventListener('click', (e) => filters.addTodoEvent(todoInputHTML, addTodo)) //추가 버튼 클릭
        todoInputHTML.addEventListener('keypress', e => (e.key === 'Enter') ? filters.addTodoEvent(e.target, addTodo) : "") //엔터
    }

    this.init()
}
