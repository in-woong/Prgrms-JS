function TodoList(data, selector) {
  validateDataList(data, this);

  this.data = data;

  this.render = function () {
    let renderContents = "";
    if (this.data.length < 1) {
      renderContents = `<div class="pd-bottom-10">할 일 목록이 없습니다.</div>`;
    } else {
      renderContents = this.data.map((item, idx) => `<button onclick="remove(${idx})">X</button>
                                                            <p class="inline-block-contents pd-left-10 contents" onclick="complete(${idx})">
                                                                ${!item.isCompleted ? item.text : `<s>${item.text}</s>`}
                                                            </p>
                                                            <br />`).join("");
    }
    document.querySelector(`#${selector}`).innerHTML = renderContents;
  };
  this.setState = function (nextData) {
    this.data = nextData;
    this.render();
  };
  this.addTodoList = function (addTarget) {
    validateData(addTarget.value);

    this.data.push({
      text: addTarget.value,
      isCompleted: false
    });

    this.render();

    addTarget.value = "";
  };
  this.removeTodoList = function (idx) {
    this.data.splice(idx, 1);
    this.render();
  };
  this.completeTodoList = function (idx) {
    this.data[idx].isCompleted = !this.data[idx].isCompleted;
    this.render();
  };

  this.render();
}
