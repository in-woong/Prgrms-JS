import {
    data1, data2, data3, data4,
} from "./data.js"

function TodoList(data, cssSelector) {
    if (!new.target) {
        throw new Error("new 연산자가 필요합니다")
    }
    if (_.isNil(data)) {
        throw new Error("주어진 인자는 null 또는 undefined입니다")
    }
    if (!Array.isArray(data)) {
        throw new Error("주어진 인자는 배열이 아닙니다")
    }
    if (data.length === 0) {
        throw new Error("빈 배열입니다")
    }
    this.data = data
    this.selector = cssSelector
    this.render = function () {
        const $todoList = document.querySelector(cssSelector)
        $todoList.innerHTML = ""

        const fragment = new DocumentFragment()

        const $numOfToDoList = document.createElement("div")
        $numOfToDoList.setAttribute("class", "list-number")
        $numOfToDoList.innerText = Number(cssSelector[(RegExp("#todo-list", "g").exec(cssSelector).index) + 10])
        fragment.appendChild($numOfToDoList)
        const $list = document.createElement("ul")
        $list.setAttribute("class", "items")
        fragment.appendChild($list)

        this.data.forEach((toDo) => {
            if (!toDo.hasOwnProperty("text")) {
                throw new Error("데이터 요소의 key값으로 text가 존재하지 않습니다")
            }
            if (typeof toDo.text !== "string") {
                throw new Error("text의 타입이 올바르지 않습니다")
            }
            if (!toDo.hasOwnProperty("isCompleted")) {
                throw new Error("데이터 요소의 key값으로 isCompleted가 존재하지 않습니다")
            }
            if (typeof toDo.isCompleted !== "boolean") {
                throw new Error("isCompleted의 타입이 올바르지 않습니다")
            }
            const $item = document.createElement("li")
            $item.innerHTML = toDo.isCompleted ? `<s>${toDo.text}</s>` : `${toDo.text}`
            $list.appendChild($item)
        })
        $todoList.appendChild(fragment)
    }
    this.setState = function (nextData) {
        this.data = nextData
        this.render()
    }
}

const todoList1 = new TodoList(data1, "#todo-list1")
const todoList2 = new TodoList(data2, "#todo-list2")
const todoList3 = new TodoList(data3, "#todo-list3")

todoList1.render()
todoList2.render()
todoList3.render()
todoList1.setState(data4)
