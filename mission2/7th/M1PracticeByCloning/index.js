const data1 = [
    {
        text: 'JS 공부하기',
        isCompleted: true
    },
    {
        text: 'JS 복습하기',
        isCompleted: true
    }
]

const data2 = [
    {
        text: '월 1회 야식',
        isCompleted: true
    },
    {
        text: '주 5회 운동',
        isCompleted: false
    }
]

const data3 = [
    {
    text: '월 4회 야식',
    isCompleted: false
    },
    {
    text: '주 8회 운동',
    isCompleted: true
    }
]

const todoList1 = new TodoList(data1, document.querySelector('#todo-list1'));
const todoList2 = new TodoList(data2, document.querySelector('#todo-list2'));
const todoList3 = new TodoList(data3, document.querySelector('#todo-list3'));
todoList3.setState(data1)
