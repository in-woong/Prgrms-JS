import TodoInput from './components/TodoInput.js'
import TodoList from './components/TodoList.js'

const Todo = [
  {
    text: 'todo text',  // 할 일 이름
    isCompleted: false, // 완료 여부
  },
  {
    text: 'todo text 2',  // 할 일 이름
    isCompleted: false, // 완료 여부
  },

]

function App($target) {
  
  // new 키워드로 생성하지 않은 경우
  if(!new.target){
    throw new Error('new 키워드를 통해서 생성해주세요.');
  };

  this.$target = $target;
  this.$state = Todo;
  
  const changeState = (todoItem) =>{
    const newTodoItems = [
      ...this.$state,
      {
        text:todoItem,
        isCompleted:false
      }
    ];
    this.setState(newTodoItems);
  };

  this.todoInput = new TodoInput(this.$target,changeState);
  
  this.todoList = new TodoList(Todo,this.$target);


  this.setState = (nextSate) => {
    console.log('동작한다.',nextSate);
    this.$state = nextSate;
    this.todoList.setState(nextSate);
  }
};

export default App;