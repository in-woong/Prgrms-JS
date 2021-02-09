function App(targetEl, initialState) {
  this.targetEl = targetEl;
  this.state = initialState;
  const removeBtn = document.querySelector("button");

  this.todoList = new TodoList({
    targetEl,
    initialState: this.state,
    onClick: (index) => {
      const nextState = [...this.state];
      nextState[index] = {
        text: nextState[index].text,
        isCompleted: !nextState[index].isCompleted,
      };

      this.setState(nextState);
    },
  });

  this.todoInput = new TodoInput({
    onTodoInput: (text) => {
      const nextState = [
        ...this.state,
        {
          text,
        },
      ];

      this.setState(nextState);
    },
  });

  this.todoCount = new TodoCount({
    targetEl,
    initialState: this.state,
  });

  this.setState = (nextState) => {
    this.state = nextState;
    this.todoList.setState(this.state);
    this.todoCount.setState(this.state);

    setData("todo", this.state);
  };

  this.removeTodos = () => {
    this.state = [];
    this.setState([]);
    this.todoCount.setState([]);
  };
  const removeAllEvent = new CustomEvent("removeAll");
  removeBtn.addEventListener("click", (e) => {
    targetEl.dispatchEvent(removeAllEvent);
  });
  targetEl.addEventListener("removeAll", () => {
    this.removeTodos();
  });
}
