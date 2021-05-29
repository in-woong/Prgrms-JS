import { data } from "./data.js"

const $todoList = document.querySelector("#todo-list");

function TodoList(data) {
    this.data = data;
    this.render = function () {
        const $number = document.createElement("div");
        $number.setAttribute("class", "list-number")
        $number.innerText = "1"
        $todoList.appendChild($number) 

        const $list = document.createElement("ul");
        $list.setAttribute("class", "items")
        data.forEach((el) => {               
            const $item = document.createElement("li")
            const $text = document.createTextNode(el.text);
            $item.appendChild($text);
            $list.appendChild($item)                     
            $todoList.appendChild($list)
        })
}}

let todoList = new TodoList(data);


todoList.render()
