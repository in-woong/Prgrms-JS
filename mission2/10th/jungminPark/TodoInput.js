const ENTER_KEY_CODE = 13

function TodoInput({$app, onTodoInput}){
    const $todoInput = document.createElement('input')
    $todoInput.placeholder = 'Enter the work!'

    const $addButton = document.createElement('button')
    $addButton.textContent = 'ADD'
    
    $app.appendChild($todoInput)
    $app.appendChild($addButton)

    $todoInput.addEventListener('keydown', (e) => {
        if(e.keyCode === ENTER_KEY_CODE){
            onTodoInput(e.target.value)
            e.target.value = ''

        }
    })

    this.render = () => {}
}