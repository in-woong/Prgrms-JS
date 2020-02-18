function TodoInput(addTodo, toggleTodo, removeTodo) { 
    const $inputBtn = document.querySelector('#input-btn')
    const $inputText = document.querySelector('#input-text')
    const $myTodo = document.querySelector('#myTodo-list')

    this.init = function () {
        this.bindEvent()
        return this
    }

    this.bindEvent = function () {
        $inputBtn.addEventListener('click', e => {
            this.onClickAdd(e)            
        })

        $inputText.addEventListener('keydown', e => {
            this.onKeyDownEnter(e)
        })

        $myTodo.addEventListener('click',e => {
            this.onClickRemove(e)
        })
    }

    this.onClickRemove = function (e) {
        const target = e.target
        const li = e.target.closest('li');
        const ul = e.target.closest('ul');
        const index = Array.from(ul.childNodes).indexOf(li);

        if(target.nodeName === 'BUTTON') {
            removeTodo(index)
        }

        if(target.nodeName !== 'BUTTON') {
            toggleTodo(index)
        }
    }

    this.onKeyDownEnter = function (e) {
        const ENTER = 13
    
        if( e.keyCode === ENTER) {
            addTodo($inputText.value)
            $inputText.value = ''
        }
    }

    this.onClickAdd = function (e) {
        this.addTodo($inputText.value)
        $inputText.value = ''
    }

    this.init()
}
export default TodoInput
