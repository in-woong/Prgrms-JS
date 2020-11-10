import { validateDataList } from "../scripts/validate-data.js";

export default function TodoList(data, $listElement, removeFunc, completeFunc) {
  validateDataList(data, this);

  this.data = data;

  this.render = () => {
    let renderContents = "";
    if (this.data.length < 1) {
      renderContents = "<div class='pd-bottom-10'>할 일 목록이 없습니다.</div>";
    } else {
      renderContents = this.data.map((item, idx) => `<button id="remove-btn" data-idx="${idx}">X</button>
        <p id="todo" class="inline-block-contents pd-left-10 contents" data-idx="${idx}">
            ${!item.isCompleted ? item.text : `<s>${item.text}</s>`}
        </p>
        <br />`).join("");
    }
    $listElement.innerHTML = renderContents;
    this.addEvents();
  };
  this.addEvents = () => {
    document.querySelectorAll("#remove-btn").forEach((element) => {
      element.addEventListener("click", () => {
        removeFunc(element.dataset.idx);
      });
    });
    document.querySelectorAll("#todo").forEach((element) => {
      element.addEventListener("click", () => {
        completeFunc(element.dataset.idx);
      });
    });
  };

  this.render();
}
