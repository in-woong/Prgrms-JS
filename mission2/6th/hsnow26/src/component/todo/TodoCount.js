import {createTodoCountInnerHTML} from '../../utils/todo/filerter_item.js'

export default function TodoCount(todos){
    this.$todoCount = document.querySelector('#todo-count')
    this.todos = todos

    this.render = function(){
        this.$todoCount.innerHTML = createTodoCountInnerHTML(this.todos)
    }

    this.setState = function(nextData){
        this.todos = nextData
        this.render()
    }

    this.render()
}
