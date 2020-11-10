import App from "./components/App.js";

const $listElement = document.querySelector("#todo-list");
const $inputElement = document.querySelector("#todo-input");
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

new App(data, $listElement, $inputElement);
