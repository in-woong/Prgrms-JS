(function() {
  const data = [
    {
      text: "JavaScript 문서 읽기",
      isCompleted: false,
    },
    {
      text: "로토에게 질문하기",
      isCompleted: false,
    },
    {
      text: "Pull Request 만들기",
      isCompleted: false,
    },
    {
      text: "Slack 접속하기",
      isCompleted: true,
    },
  ];

  const todoList = new TodoList(document.querySelector("#todo-list"), data);

  const todoInput = new TodoInput(data)

  // 할일 추가
  document.querySelector('#add-todo-button').addEventListener('click',() => {
    todoList.setState(todoInput.addTodoList(document.querySelector("#todo-input").value))
  })

  // 할일 완료, 삭제
  document.querySelector('#todo-list').addEventListener('click', (e) => {
    e.stopPropagation()
    if(e.target.className === "del-btn"){
      todoList.delList(e.target.parentNode.id)
    } else if(e.target.nodeName === 'SPAN') {
      todoList.complete(e.target.parentNode.id)
    }

  })

})();


