(function() {
  // 요 기본 데이터는 자유롭게 작성하세요.

  let id = 0;
  let data = {
    [id]: {
      id: id++,
      text: "JavaScript 문서 읽기",
      isCompleted: false
    },
    [id]: {
      id: id++,
      text: "로토에게 질문하기",
      isCompleted: true
    },
    [id]: {
      id: id++,
      text: "Pull Request 만들기",
      isCompleted: false
    },
    [id]: {
      id: id++,
      text: "Slack 접속하기",
      isCompleted: true
    }
  };


  const todoList = new TodoList(document.querySelector("#todo-list"), data);

  document
    .querySelector("#add-todo-button")
    .addEventListener("click", function() {
      const todoText = document.querySelector("#todo-input").value;
      if (todoText.length > 0) {
        todoList.data = {
          ...todoList.data,
          [id]: {
            id: id++,
            text: todoText,
            isCompleted: false
          }
        };

        // todoList.data.push({
        //   id: id++,
        //   text: todoText,
        //   isCompleted: false
        // });
        todoList.setState(todoList.data);
      }
    });
})();
