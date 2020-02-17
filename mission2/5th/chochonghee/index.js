// 데이터
const data = [{
        text: 'JS 공부하기',
        isCompleted: true,
    },
    {
        text: 'JS 복습하기',
        isCompleted: true,
    },
]
const dataNext = [{
        text: '영어소설책 10페이지 읽기',
        isCompleted: false,
    },
    {
        text: '영어문장 5개 만들기',
        isCompleted: false,
    },
]
const todoList = new TodoList(data, $todoListElement)
todoList.setState(dataNext)