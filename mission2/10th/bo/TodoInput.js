function TodoInput({ onTodoInput }) {
  const addList = document.querySelector("input");

  addList.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      const text = e.target.value;
      if (text === "") {
        alert("텍스트를 입력하세요");
      }
      onTodoInput(text);
      e.target.value = "";
    }
  });

  this.render = () => {};
}
