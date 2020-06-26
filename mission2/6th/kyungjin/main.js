const data = [
    {
        id:String(123),
        text: 'JS 공부하기',
        isCompleted: true,
    },
    {
        id:String(456),
        text: 'JS 복습하기',
        isCompleted: false,
    },
]

const $target = document.querySelector('#todo-list')
const todoList = new TodoList($target, data)

const confirmBtn = document.querySelector('#confirmBtn')
const todoInput = document.querySelector('#todoInput')

confirmBtn.addEventListener('click',()=>{
    addTodoList(todoInput)
})

todoInput.addEventListener('keydown', (e)=>{
    if(e.keyCode==13){
        addTodoList(todoInput)
    }
})

$target.addEventListener('click', e=>{
    const target = e.target
    const idx = target.parentNode.dataset.idx;

    if(target.className=='remove'){
        todoList.remove(idx)
    }else if(target.className=='done'){
        todoList.done(idx)
    }

})
