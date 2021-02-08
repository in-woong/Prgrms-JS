function TodoList({ targetEl, initialState, onClick }) {
  this.state = initialState;
  this.onClick = onClick;

  const listEl = document.createElement("li");
  targetEl.appendChild(listEl);
  this.listEl = listEl;

  this.render = function () {
    this.listEl.innerHTML = this.state
      .map(
        ({ text, isCompleted }, index) =>
          `<li data-index="${index}" class="list">${
            isCompleted ? `<s>${text}</s>` : text
          }</li>`
      )
      .join("");
  };

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render();
  this.listEl.addEventListener("click", (e) => {
    const index = parseInt(e.target.closest("li").dataset.index);
    console.log(index);
    this.onClick(index);
  });
}
