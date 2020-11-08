function TodoInput(inputSelector) {
  this.render = function () {
    const template = `<input id="add-todo" type="text" class="line-height-20" placeholder="할일을 입력해주세요." />
                     <button id="add-btn" class="line-height-20" onclick="add();">추가</button>`;
    document.querySelector(`#${inputSelector}`).innerHTML = template;
  };

  this.render();
}
