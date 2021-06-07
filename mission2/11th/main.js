import TodoList from "./components/TodoList.js";


function main(data, $target){
  this.$state = data;
  this.todolist = new TodoList(this.$state, $target);

  
}




export default main
