let data = [
    {
        text: 'JS 공부하기',
        isCompleted: true
    },
    {
        text: 'JS 복습하기',
        isCompleted: false
    }
]
const todoList = new TodoList(document.querySelector('#todo-list'), data)
const $input = document.querySelector('#todo-input')
const $addButton = document.querySelector('#todo-add-button')
$addButton.addEventListener('click', () => {
    if (!$input.value) {
        alert('할일을 입력하세요.')
        return
    }
    data.push({
        text: $input.value,
        isCompleted: false
    })
    todoList.setState(data)
    $input.value = ''
    $input.focus()
})
todoList.$list.addEventListener('click', (e) => {
    if (e.target.classList.contains('todo-delete')) { // 할일 삭제
        data.splice(e.target.parentNode.id, 1)        
    } else { // isCompleted 값 변경
        const id = e.target.nodeName === 'S' ? e.target.parentNode.id : e.target.id
        data[id].isCompleted = !data[id].isCompleted
    }
    todoList.setState(data)
})
