import App from "./components/App.js";
import TodoError from "./components/TodoError.js";

const $listElement = document.querySelector("#todo-list");
const $inputElement = document.querySelector("#todo-input");
const $countElement = document.querySelector("#todo-count");
const $errorElement = document.querySelector("#error-msg");
const data = [
  {
    text: "JS 공부하기",
    isCompleted: false
  },
  {
    text: "JS 복습하기",
    isCompleted: false
  }
];
try {
  new App(data, $listElement, $inputElement, $countElement, $errorElement);
} catch (e) {
  new TodoError({ view: true, text: e.message }, $errorElement);
}
