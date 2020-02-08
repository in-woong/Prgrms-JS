let insert_btn = document.getElementById("submit_btn");
let input = document.getElementById("input_text");

insert_btn.addEventListener("click", function() {
  data.push({text: input.value, isCompleted: null});
  input.value = "";
  todoList.setState(data);
});