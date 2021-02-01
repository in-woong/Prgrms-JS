const data = [
  {
    text: "JS 공부하기",
    isCompleted: true,
  },
  {
    text: "JS 복습하기",
    isCompleted: false,
  },
];

const dataSample = {s
  text: "todo text", // 할 일 이름
  isCompleted: false, // 완료 여부
};

const $target = document.querySelector("#todo-list");
const $inputTarget = document.getElementById("inputTodo");
const todoList = new TodoList($target, data);

$inputTarget.addEventListener("keyup", (event) => {
  if (event.code === "Enter" && $inputTarget.value.trim().length > 0) {
    dataSample.text = $inputTarget.value.trim();
    todoList.data.push(JSON.parse(JSON.stringify(dataSample)));
    todoList.setState(todoList.data);
    $inputTarget.value = "";
  }
});
