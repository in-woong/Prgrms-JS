const items = [
  { text: "2week study", isCompleted: true },
  { text: "3week study", isCompleted: false },
];

const items2 = [
  { text: "brackfast", isCompleted: false },
  { text: "lunch", isCompleted: false },
];

function addTodo(e) {
  e.preventDefault();
  const input = document.querySelector("#input_todo");
  if (input.value === "") {
    alert("단어를 입력해주세요");
    return;
  }
  todoList.setState([...todoList.state, { text: input.value, isCompleted: false }]);
  input.value = "";
}

const form = document.querySelector("#input_form");
form.addEventListener("submit", addTodo);

const todoList = new TodoList({
  $app: document.querySelector("main"),
  initialState: items,
});
