import { $, TEXTUNDEFINED, DATAISNOTARY, VALISNOTOBJ, ISNOTNEW,
            isAvilable } from "./utils.js"

const $todoList = $("#todo-list");

const data = [
    {
      text: 'JS 공부하기'
    },
    {
      text: 'JS 복습하기'
    },
    {
      text : "                   d    "
    }
]



function TodoList(data) {
    if (!(this instanceof TodoList))
        throw new Error(ISNOTNEW);

    this.check = (data) => {
        if (!Array.isArray(data))
            throw new Error(DATAISNOTARY)
        data.forEach((val) => {
            if (val.constructor !== Object)
                throw new Error(VALISNOTOBJ)
            if (isAvilable(val.text))
                throw new Error(TEXTUNDEFINED)
        })
    }

    this.render = () => {
        data.forEach((val) => {
            $todoList.insertAdjacentHTML("beforeend", `<li>${val.text}</li>`)
        })
    }

    this.check(data);
}

let test = new TodoList(data);


test.render();

