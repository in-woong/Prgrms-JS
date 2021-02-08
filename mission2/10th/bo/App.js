function App(targetEl, initialState) {
  this.targetEl = targetEl;
  this.state = initialState;

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

  this.setState = (nextState) => {
    this.state = nextState;
    this.todoList.setState(this.state);
  };
}
