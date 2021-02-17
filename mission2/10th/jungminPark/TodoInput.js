const ENTER_KEY_CODE = 13

function TodoInput({$app, onTodoInput}){
    const $todoInput = document.createElement('input')
    $todoInput.placeholder = 'Enter the work!'

    const $addButton = document.createElement('button')
    $addButton.textContent = 'ADD'
    
    $app.appendChild($todoInput)
    $app.appendChild($addButton)

    const callOnTodoInput = () => {
        const item = this.$todoInput.value
        if (item) {
          onTodoInput(item)
          this.$todoInput.value = ''
        }
    }
    
    $addButton.addEventListener('click', (e) => {
        callOnTodoInput()
    })

    $todoInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            callOnTodoInput()
        }
    })

    this.render = () => {}
}