import TodoList from './TodoList.js';

const todos = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
];

const hobbies = [
  {
    text: '책 읽기',
    isCompleted: true,
  },
  {
    text: '여행 가기',
    isCompleted: false,
  },
];


const jobs = [
  {
    text: 'Jira issue 처리하기',
    isCompleted: true,
  },
  {
    text: '컨플 작성하기',
    isCompleted: false,
  },
];

try {
  const todoList = new TodoList('todo-list', todos);
  const todoHobbies = new TodoList('todo-hobbies', hobbies);
  const todoJobs = new TodoList('todo-jobs', jobs);

  const sampleSetStateFunc = function () {
    todoList.setState([
      ...todos,
      {
        text: 'TS 공부하기',
        isCompleted: false,
      },
    ])
    todoHobbies.setState([
      {
        text: '이력서 작성',
        isCompleted: true,
      },
    ])
    todoJobs.setState(jobs.map(job => {
      return { ...job, isCompleted: true };
    }))
  };

  const setStateButton = document.querySelector('#btn-set-state');

  setStateButton.addEventListener('click', sampleSetStateFunc);

} catch (error) {
  console.error('ERROR!!!!!', error);
}
