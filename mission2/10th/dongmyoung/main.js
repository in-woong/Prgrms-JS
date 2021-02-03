const studyData = [
  {
    countData : 1,
    text : 'React.js',
    isCompleted : true,
    visible: true,
  },
  {
    countData : 2,
    text : 'Node.js',
    isCompleted : false,
    visible : true,
  },
]

const $target = document.querySelector('#study-list')
const todo = new TodoList(studyData, $target)

const $addTarget = document.querySelector('#addTodo')
const addTodoList = new AddTodoEnter($addTarget, 'addTodo') 

const addBtnList = new AddTodoBtn($addTarget, 'addTodo')

let inputValue