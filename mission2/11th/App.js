import TodoList from "./components/TodoList.js";
import TodoInput from "./components/TodoInput.js";

function App(data, $target){
  this.$state = data;
  this.todoInput = new TodoInput((text) =>{
    const newData = [
      ...this.$state
      ,{
      id : this.$state.length+1,
      text : text,
      isCompleted : false
    }
  ];
  this.setState(text,newData);
  
    //this.drawTodo(curValue);
  });
  console.log('app.js');
  console.log(this.$state);
  this.todoList = new TodoList(this.$state, $target,
    (liId)=>{
      const toggleTodos = this.$state.map((todo)=>{
        
        //...todo 하면 인자가 2개가 있는데 isCompleted 만 따로 인지하고 반전시켜주나 신기하네 이건 후에 테스트해보자! 
        return todo.id === parseInt(liId) ? {...todo, isCompleted : !todo.isCompleted } : todo
      });
      
      this.setState("",toggleTodos);

    },
    (liId)=>{
      const cleanTodos = this.$state.filter((todo)=>{
        return todo.id !== parseInt(liId);
      });
      this.setState("",cleanTodos);
    }
    );
  
    this.setState = (text, nextState) =>{
      this.$state = nextState;
      if(text!="")
        this.todoList.drawTodo(text);
      this.todoList.setState(this.$state);
    }
}




export default App
