import TodoList  from './TodoList.js'

(function() {
  // 요 기본 데이터는 자유롭게 작성하세요.
  const data = [
    {
      text: "JavaScript 문서 읽기",
      isCompleted: false,
      id: 0,
    },
    {
      text: "로토에게 질문하기",
      isCompleted: false,
      id: 1,
    },
    {
      text: "Pull Request 만들기",
      isCompleted: false,
      id: 2,
    },
    {
      text: "Slack 접속하기",
      isCompleted: true,
      id: 3,
    },
  ];

  const todoList = new TodoList({
      $target: document.querySelector("#todo-list"),
      data,
    });

  document
    .querySelector("#add-todo-button")
    .addEventListener("click", function() {
      const todoText = document.querySelector("#todo-input").value;

      if (todoText.length > 0) {
        data.push({
          text: todoText,
          isCompleted: false,
        });

        todoList.setState(data);
      }
    });
})();
