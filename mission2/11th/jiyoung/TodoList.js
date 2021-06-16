function TodoList({ $app, initialState }) {
  this.state = initialState;

  this.$target = document.createElement("div");
  this.$target.setAttribute("data-component-type", "TodoList");
  $app.append(this.$target);

  this.$target.addEventListener("click", function (e) {
    const $target = e.target.closest("li");
    if ($target) {
      const { index } = $target.dataset;
      // 여기서 바깥에 있는 this.state에 접근할 수 있는 방법이 아예 생각나지 않습니다..
      // 지금 현 상황에서는 절대 불가능한건가요..
    }
  });

  this.render = function () {
    const $html = this.state.map((item, i) => `<li data-index=${i} ${item.isCompleted ? "class='completed'" : ""}><span>${item.text}</span><button>삭제</button></li>`).join("");
    this.$target.innerHTML = `<ul>${$html}</ul>`;
  };

  this.setState = function (nextData) {
    this.state = nextData;
    this.render();
  };

  this.render();
}
