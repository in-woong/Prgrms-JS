import TodoList from './TodoList.js';

let data = [
    {
        text: 'JS 공부하기',
        isCompleted: true
    },
    {
        text: 'JS 복습하기',
        isCompleted: true
    },
    {
        text: '낮잠자기',
        isCompleted: false
    },
    {
        text: '텀프 제출하기',
        isCompleted: true
    },
];

const todoList = new TodoList(data, "#todo-list");

document.querySelector("#todo-input").addEventListener("keyup", (e) => {
    const KEY_CODE = 13;    // for enter
    if (e.keyCode === KEY_CODE) { 
        if (e.target.value.length === 0) {
            alert("할일을 입력해주세요");
        } else {
            addTodo(e.target);
        }
    }
});

function addTodo($inputTarget) {
    console.log($inputTarget);
    todoList.setState([
        ...todoList.data,
        {
            text: $inputTarget.value,
            isCompleted: false
        },
    ])
    $inputTarget.value = null;
    $inputTarget.focus();
}
