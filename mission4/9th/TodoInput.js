import {
    useNewKeyword,
    useArrayState,
    checkTarget,
    checkTypes,
} from './validation.js'
const ENTER = 13

export default function TodoInput({$app, addTodo}){
    const $input = document.querySelector('#todo-input')

    this.$app = $app
    this.$input = $input
    this.addTodo = addTodo

    $input.addEventListener('keydown', (e) => {
        if(e.keyCode === ENTER && $input.value.length > 0){
                this.addTodo($input.value)
                this.$input.value = ''
        }
    })
}