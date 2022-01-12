export default function TodoInput ({$app, addTodo,removeAllTodo}){
    this.$target = document.createElement('form')
    $app.appendChild(this.$target)
    this.render = function(){
        this.$target.innerHTML=`
            <input type="text" placeholder="할 일을 추가해주세요.">
            <button type="button" class="remove-all-button">Remove All</button>
            `
    }

    
    this.$target.addEventListener('submit',(e)=>{
        e.preventDefault()
        const $input = this.$target.querySelector('input')
        addTodo($input.value)
        $input.value=''
    })
    
    this.render()
    
    this.$target.querySelector('.remove-all-button').addEventListener('click',removeAllTodo)
    
}
