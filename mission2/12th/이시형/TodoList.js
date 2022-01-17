import checkValidation from "./CheckData.js"

export default function TodoList({$app , state , todoClick , removeTodo}){
    if(!new.target) throw new Error("TodoList() must be called with new")
    checkValidation(state)
    this.state = state
    this.$target = document.createElement('ul')
    $app.appendChild(this.$target)

    this.$target.addEventListener('click',(event)=>{
        const target = event.target
        if(target.matches('li')) {
            const {dataset : {id}} = target
            todoClick(id)
        }
        if(target.matches('.delete-button')) {
            const {dataset : {id}} = target
            removeTodo(id)
        }
    })

    this.render = function(){
        this.$target.innerHTML = `${this.state.map(({text,isCompleted},index)=>{
            return `<li data-id=${index}>${isCompleted ? `${text}✅` : text } <button data-id=${index} class="delete-button">❌</button></li>`
        }).join('')}`
    }

    this.setState = function(nextData){
        checkValidation(nextData)
        this.state = nextData
        this.render()
    }
    this.render()
}
