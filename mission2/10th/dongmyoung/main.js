const studyData = [
  {
    id : 1,
    text : 'React.js',
    isCompleted : true,
    visible: true,
  },
  {
    id : 2,
    text : 'Node.js',
    isCompleted : false,
    visible : true,
  },
]

const todo = new TodoList(studyData, document.querySelector('#study-list'))