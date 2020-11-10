export default function TodoInput($inputElement, addFunc) {
  this.addInput = null;

  this.render = () => {
    const template = `<input id="add-todo" type="text" class="line-height-20" placeholder="할일을 입력해주세요." />
    <button id="add-btn" class="line-height-20">추가</button>`;
    $inputElement.innerHTML = template;
    this.addInput = document.getElementById("add-todo");
    this.addEvents();
  };

  this.addEvents = () => {
    document.querySelector("#add-todo").addEventListener("keypress", (e) => {
      if (e.code === "Enter") {
        addFunc(this.addInput.value);
        this.addInput.focus();
      }
    });
    document.querySelector("#add-btn").addEventListener("click", (e) => addFunc(this.addInput.value));
  };

  this.render();
}
