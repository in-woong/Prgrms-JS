import * as filters from '../../utils/todo/filerter_item.js'

export default function TodoCount(todo){
    this.$todoCount = document.querySelector('#todo-count')
    this.todo = todo

    this.render = function(){
        this.$todoCount.innerHTML = filters.createTodoCountInnerHTML(this.todo)
    }

    this.setState = function(nextData){
        this.todo = nextData
        this.render()
    }

    this.render()
}
