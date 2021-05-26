import TodoList from './TodoList.js';

const todos = [
  {
    text: 'JS 공부하기',
    isCompleted: true
  },
  {
    text: 'JS 복습하기',
    isCompleted: true
  }
];

const todos2 = [
  {
    text: '운동하기',
    isCompleted: false
  },
  {
    text: '과제하기',
    isCompleted: true
  }
];

const todos3 = [
  {
    text: '유튜브시청',
    isCompleted: false
  },
  {
    text: '분리수거하기',
    isCompleted: true
  }
]

try {
  const todoList = new TodoList(document.querySelector('#todo-list'), todos)
  const todoList2 = new TodoList(document.querySelector('#todo-list-2'), todos2)
  const todoList3 = new TodoList(document.querySelector('#todo-list-3'), todos3)


  todoList.setState([
    ...todoList.state,
    {
      text: 'gg',
      isCompleted: false
    }
  ])

  todoList2.setState([
    ...todoList2.state,
    {
      text: 'hi',
      isCompleted: false
    }
  ])

} catch (e) {
  console.log(e.message);
}