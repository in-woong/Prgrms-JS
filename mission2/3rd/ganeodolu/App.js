// 기본 데이터 만들기
let data = [
    {
        text: 'JS 할일추가',
        isCompleted: false,
    }
];

// TodoList.js 및 TodoCount.js 함수 사용하기
const todoList = new TodoList('#todo-list', data);
const todoCount = new TodoCount('#todo-count', data);
const todoListTop = document.querySelector('.todo-list-top') // todolist 상위 연결클래스(이벤트 위임적용위함)
const todoAdd = document.getElementById('todo-add-button'); // 추가버튼 연결변수
const todoAddText = document.getElementById('todo-input'); // 텍스트상자 연결변수

export {data, todoList, todoCount, todoListTop, todoAdd, todoAddText}