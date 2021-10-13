function App(data, $target, $input) {
  this.todoList = new TodoList($target, data);
  this.todoInput = new TodoInput($input,(title) => {
    this.todoList.setState([...this.todoList.state, {
      text: title,
      isCompleted: false,
    }])
    this.todoInput.value = ""; //UX를 위한 인풋값 초기화
  });


}

let data = [
  {
    text: "JS 학습하기1",
    isCompleted: true
  },
  {
    text: "JS 복습하기1",
    isCompleted: false
  }
];

App(data,document.querySelector("#app"),document.querySelector("#todo-input"));