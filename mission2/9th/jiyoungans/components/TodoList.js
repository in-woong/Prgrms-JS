import {
  checkNewKeyword, checkValue, checkValueType, checkIsArray
} from "../scripts/validate-data.js";

export default function TodoList(data, $listElement, removeFunc, completeFunc) {
  this.data = data;

  this.validation = () => {
    checkNewKeyword(this.data);
    checkValue(this.data);
    checkIsArray(this.data);
    checkValueType(this.data, (({ text, isCompleted }) => typeof text === "string" && typeof isCompleted === "boolean"));
  };
  this.render = () => {
    this.validation();
    let renderContents = "";
    if (this.data.length === 0) {
      renderContents = "<div class='pd-bottom-10'>할 일 목록이 없습니다.</div>";
    } else {
      renderContents = this.data.map((item, idx) => `<button id="remove-btn" data-idx="${idx}">X</button>
        <p id="todo" class="inline-block-contents pd-left-10 contents" data-idx="${idx}">
            ${!item.isCompleted ? item.text : `<s>${item.text}</s>`}
        </p>
        <br />`).join("");
    }
    $listElement.innerHTML = renderContents;
  };
  this.addEvents = () => {
    const todoListComp = document.querySelector("#todo-list");
    todoListComp.addEventListener("click", (e) => {
      const $target = e.target;
      if ($target.nodeName === "P") {
        completeFunc($target.dataset.idx);
      } else if ($target.nodeName === "S") {
        completeFunc($target.parentNode.dataset.idx);
      } else if ($target.nodeName === "BUTTON") {
        removeFunc($target.dataset.idx);
      }
    });
  };

  this.render();
  this.addEvents();
}
