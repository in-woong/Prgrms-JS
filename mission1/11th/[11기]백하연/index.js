'use strict';

const data = [
  {
    text: 'JS 공부하기',
    isCompleted: false
  },
  {
    text: 'JS 복습하기',
    isCompleted: false
  }
]

const dailyTodoList = [
  {
    text: '스트레칭하기',
    isCompleted: false
  },
  {
    text: '인공눈물 넣기',
    isCompleted: true
  },
  {
    text: '유산균 챙겨먹기',
    isCompleted: true
  }
]

const monthlyTodoList = [
  {
    text: 'React 공부',
    isCompleted: false
  },
  {
    text: 'TypeScript 공부',
    isCompleted: false
  }
]

const $todo_list1 = document.getElementById('todo-list1');
const $todo_list2 = document.getElementById('todo-list2');
const $todo_list3 = document.getElementById('todo-list3');

const TodoList = function(data, element) {
  this.data = data;
  this.element = element;

  const $ul = document.createElement('ul');
  
  this.element.appendChild($ul);

  this.isValid = data => {
    if (!new.target) {
      throw new Error('new 키워드를 사용해 주세요!');
    }
    if (data === null || data === undefined) {
      throw new Error('올바른 형태의 데이터가 아닙니다.');
    }

    if (!Array.isArray(data)) {
      throw new Error('배열 타입의 데이터가 아닙니다.');
    }
  }

  this.setState = nextData => {
    this.data = nextData;
    this.render();
  }

  this.render = () => {
    this.isValid(data);

    this.data.forEach(({ text, isCompleted }) => {
      const $li = document.createElement('li');

      $li.innerHTML += `${isCompleted ? `<s>${text}</s>` : `${text}`}`;

      $ul.appendChild($li);
    });
  }
}

const todoList1 = new TodoList(data, $todo_list1);
todoList1.render();

const todoList2 = new TodoList(dailyTodoList, $todo_list2);
todoList2.render();

const todoList3 = new TodoList(monthlyTodoList, $todo_list3);
todoList3.render();
todoList3.setState([
  { 
    text: 'HTML',
    isCompleted: true,
  },{ 
    text: 'CSS',
    isCompleted: true,
  }
]);
