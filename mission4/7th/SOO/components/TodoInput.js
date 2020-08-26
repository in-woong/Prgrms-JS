function TodoInput({
    onInput
}) {
    const inputBOX = document.getElementById('inputBOX')
    const inputBtn = document.querySelector('#add-todo-button')
    const inputTxt = document.querySelector('#todo-input')

    this.bindingEvent = () => {

        function inputTxtReset() {
            inputTxt.value = ''
            inputTxt.blur();
            inputTxt.focus();
        }

        inputBOX.addEventListener('submit', (e) => {
            e.preventDefault()
            onInput(inputTxt.value)
            inputTxtReset()
        })

        inputBtn.addEventListener('click', (e) => {
            if (inputTxt.value.length > 0) {
                onInput(inputTxt.value)
                inputTxtReset()
            }
        })
    }
    this.bindingEvent()
}
export default TodoInput
