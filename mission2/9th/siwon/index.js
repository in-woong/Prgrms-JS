import App from './App.js';
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

// const todoList = new TodoList(data, "#todo-list");
const todoApp = new App(data);

// document.querySelector("#todo-input").addEventListener("keyup", (e) => {
    
//     if (e.keyCode === KEY_CODE) { 
//         if (e.target.value.length === 0) {
//             alert("할일을 입력해주세요");
//         } else {
//             addTodo(e.target);
//         }
//     }
// });

// function addTodo($inputTarget) {
//     console.log($inputTarget);
//     todoList.setState([
//         ...todoList.data,
//         {
//             text: $inputTarget.value,
//             isCompleted: false
//         },
//     ])
//     $inputTarget.value = null;
//     $inputTarget.focus();
// }


//App 이라는 컴포넌트를 만든 뒤, 이 App이 TodoInput과 TodoList를 관리하는 구조가 되게 만듭니다.