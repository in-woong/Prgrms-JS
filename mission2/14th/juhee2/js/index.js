import {TodoList} from './components/TodoList.js';

const data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
];

const todayTodo = [
  {
    text: '미션1 과제하기',
    isCompleted: true,
  },
];

const tomorrowTodo = [
  {
    text: '미션1 마무리하기',
    isCompleted: false,
  },
  {
    text: '방 청소 하기',
    isCompleted: false,
  },
  {
    text: '화예시장 가기',
    isCompleted: false,
  },
];

const $target = document.getElementById('TodoList');

try {
  const todoList = new TodoList(data, $target);

  const todoListToday = new TodoList(todayTodo, $target);

  const todoListTomorrow = new TodoList(tomorrowTodo, $target);

  const newTodo = [
    {
      text: '목록 다시 정하기',
      isCompleted: false,
    },
  ];

  todoListTomorrow.setState(newTodo);
} catch (e) {
  console.log(e.message);
}
