import * as filters from '../../utils/todo/filerter_item.js'

export default function TodoCount(todoCountHTML, todo){
    this.todoCountHTML = todoCountHTML
    this.todo = todo

    this.render = function(){
        this.todoCountHTML.innerHTML = filters.createTodoCountInnerHTML(this.todo)
    }

    this.setState = function(nextData){
        this.todo = nextData
        this.render()
    }

    this.render()
}
