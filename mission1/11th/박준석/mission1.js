import { $ } from "./utils.js"

const $todoList = $("#todo-list");

const data = [
    {
      text: 'JS 공부하기'
    },
    {
      text: 'JS 복습하기'
    },
]

function TodoList(data) {

    this.render = () => {
        data.forEach((val) => {
            $todoList.insertAdjacentHTML("beforeend", `<div> - ${val.text}</div>`)
        })
    }
}

let test = new TodoList(data);

test.render();