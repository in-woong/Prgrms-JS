const data = [
  {
    text: 'JS 공부하기',
    isCompleted: true
  },
  {
    text: 'JS 복습하기',
    isCompleted: false
  }
];

const workholic = [
  {
    text: '배포하기',
    isCompleted: true
  },
  {
    text: '모니터링 하기',
    isCompleted: false
  }
];

const programmers = [
  {
    text: '과제 구현하기',
    isCompleted: true
  },
  {
    text: '스터디원들 코드 보기',
    isCompleted: false
  },
  {
    text: '정리하기',
    isCompleted: false
  }
];

function TodoList(arrayObject, elementId) {
  if (validateType(arrayObject) && validateFormat(arrayObject)) {
    this.todolist = arrayObject;
  }

  this.setState = function (nextData) {
    if (validateType(nextData) && validateFormat(nextData)) {
      this.todolist = nextData;
    }
    this.render();
  };

  this.render = function () {
    document.getElementById(elementId).innerHTML = this.todolist
      .map((list) => {
        return `<div>${list.isCompleted ? list.text : `<s>` + list.text + `</s>`}</div>`;
      })
      .join('');
  };

  this.render();
}

let dataTodolist = new TodoList(data, 'todo-list');
let workTodolist = new TodoList(workholic, 'work-list');
let prgrmsTodolist = new TodoList(programmers, 'programmers-list');


const washList = [
  {
    text: '캐시미어 스웨터 세탁',
    isCompleted: true
  },
  {
    text: '이불 울코스 세탁',
    isCompleted: false
  }
];

dataTodolist.setState(washList);

