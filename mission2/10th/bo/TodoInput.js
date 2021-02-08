function TodoInput({ onTodoInput }) {
  const addList = document.querySelector("input");

  addList.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      const text = e.target.value;
      onTodoInput(text);
      e.target.value = "";
    }
  });

  this.render = () => {};
}
