(function() {
  // 요 기본 데이터는 자유롭게 작성하세요.
  const data = [
    {
      id: 0,
      text: "JavaScript 문서 읽기",
      isCompleted: false
    },
    {
      id: 1,
      text: "로토에게 질문하기",
      isCompleted: true
    }
    // {
    //   text: "Pull Request 만들기",
    //   isCompleted: false,
    // },
    // {
    //   text: "Slack 접속하기",
    //   isCompleted: true,
    // },
  ];

  const todoList = new TodoList(document.querySelector("#todo-list"), data);
  let id = 2;

  document
    .querySelector("#add-todo-button")
    .addEventListener("click", function() {
      const todoText = document.querySelector("#todo-input").value;
      if (todoText.length > 0) {
        todoList.data.push({
          id: id++,
          text: todoText,
          isCompleted: false
        });
        todoList.setState(todoList.data);
      }
    });
})();
