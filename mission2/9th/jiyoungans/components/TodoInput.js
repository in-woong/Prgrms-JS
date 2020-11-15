import { checkValue } from "../scripts/validate-data.js";

export default function TodoInput($inputElement, onAdd, onError) {
  this.addInput = null;

  this.render = () => {
    const template = `<input id="add-todo" type="text" class="line-height-20" placeholder="할일을 입력해주세요." />
    <button id="add-btn" class="line-height-20">추가</button>`;
    $inputElement.innerHTML = template;
    this.addInput = document.getElementById("add-todo");
    this.addEvents();
  };

  this.resetValue = () => {
    this.addInput.value = "";
  };

  this.addEvents = () => {
    document.querySelector("#add-todo").addEventListener("keypress", (e) => {
      if (e.code === "Enter") {
        try {
          checkValue(this.addInput.value);
          onAdd(this.addInput.value);
        } catch (e) {
          onError(e.message);
        }
      }
    });
    document.querySelector("#add-btn").addEventListener("click", () => {
      try {
        checkValue(this.addInput.value);
        onAdd(this.addInput.value);
      } catch (e) {
        onError(e.message);
      }
    });
  };

  this.render();
}
