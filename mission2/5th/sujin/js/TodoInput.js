
function TodoInput(TodoList, data) { 
    const $inputBtn = document.querySelector('#input-btn')
    const $inputText = document.querySelector('#input-text')
    const $myTodo = document.querySelector('#myTodo-list')

    this.setup = function () {
        this.bindEvent()
        return this
    }

    this.bindEvent = function () {
        $inputBtn.addEventListener('click', e => {
            this.onClickEnter(e)            
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
            TodoList.removeTodo(index)
        }

        if(target.nodeName !== 'BUTTON') {
            TodoList.successTodo(index)
        }
    }

    this.onKeyDownEnter = function (e) {
        const enter = 13
    
        if( e.keyCode === enter) {
            TodoList.addTodo($inputText.value)
            $inputText.value = ''
        }
    }

    this.onClickEnter = function (e) {
        TodoList.addTodo($inputText.value)
        $inputText.value = ''
    }
}
export default TodoInput;