import { $, TEXTUNDEFINED, DATAISNOTARY, VALISNOTOBJ, ISNOTNEW,
    isAvilable, addNewDiv } from "./utils.js"

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

const data2 = [
    {
        text: '게임하기'
    },
    {
        text: '축구하기'
    },
    {
        text : "독서하기"
    }
]

const data3 = [
    {
        text: '밥'
    },
    {
        text: '라면'
    },
    {
        text : "치킨"
    }
]

function TodoList(data, id) {
    if (!(this instanceof TodoList))
        throw new Error(ISNOTNEW);

    const $List = $(`${id}>ul`);
    this.state = data;

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
        this.state.forEach((val) => {
            $List.insertAdjacentHTML("beforeend", `<li>${val.text}</li>`)
        })
    }

    this.setState = (newData) => {
        $List.innerHTML = "";
        this.state = newData;
        this.render();
    }

    this.check(data);
}



addNewDiv("todo-list");
addNewDiv("play-list");
addNewDiv("food-list");

let test = new TodoList(data, "#todo-list");
let test2 = new TodoList(data2, "#play-list");
let test3 = new TodoList(data3, "#food-list");

test.render();
test2.render();
test3.render();

