import {
    useNewKeyword,
    useArrayState,
    checkTarget,
    checkTypes,
} from './validation.js'

export default function TodoInput($input, app){
    this.$input = $input
    this.addTodo = function(){
        const newTodo = {
            text: $input.value,
            isCompleted: false
        }
        app.addTodo(newTodo)
        this.$input.value = ''
    }
    this.$input.addEventListener('keydown', (e) => {
        if(e.keyCode === 13){
            if(this.$input.value){
                this.addTodo()
            }
        }
    })
}

