// 데이터 셋팅
let data = [{
        text: '코딩하기',
        isCompleted: true,
    },
    {
        text: '집안 청소하기',
        isCompleted: false,
    },
]

if (localStorage.getItem('data')) {
    try {
        data = JSON.parse(localStorage.getItem('data'));
    } catch (err) {
        throw new Error('데이터를 불러오는 것에 실패했습니다')
    }
}


//TodoList 컴포넌트
const todoList = new TodoList(data, '#todo-list')
todoList.render()
// TodoCount 컴포넌트
const todoCount = new TodoCount(data)
todoCount.render()

// 노드 담아두기
const addBtn = document.querySelector('#addBtn');
const input = document.querySelector('#newTodo');
const listNode = document.querySelector('#todo-list');
const removeallBtn = document.querySelector('#remove-all');
const app = document.querySelector('#App');

// 투두리스트 추가하기
function addTodo() {
    let todoText = input.value
    data.push({
        text: todoText,
        isCompleted: false,
    })
    todoList.setState(data)
    todoCount.setState(data)
    input.value = ''
    input.focus()
}
/* 추가 버튼 클릭 */
addBtn.addEventListener('click', function () {
    addTodo()
}, false);
/* 엔터입력 */
input.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        addTodo()
    }
}, false);

// 투두 리스트 삭제하기
function delTodo(todoId) {
    data.splice(todoId, 1)
    todoList.setState(data)
    todoCount.setState(data)
}

// toggle 처리
function toggleTodo(todoId) {
    data[todoId].isCompleted = !data[todoId].isCompleted
    todoList.setState(data)
    todoCount.setState(data)
}

// 삭제,토글 이벤트 처리 - 이벤트 위임
listNode.addEventListener('click', function (e) {
    const idx = e.target.parentNode.id
    if (e.target.tagName !== 'BUTTON') {
        toggleTodo(idx)
    } else {
        delTodo(idx)
    }

}, false);

// 커스텀 이벤트 - 모두제거
removeallBtn.addEventListener('click', e => {

    const eventRemoveAll = new CustomEvent('remove-all')
    app.dispatchEvent(eventRemoveAll);

})

app.addEventListener('remove-all', e => {
    data = []
    todoList.setState(data)
    todoCount.setState(data)
});