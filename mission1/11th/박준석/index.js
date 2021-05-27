import { addNewDiv } from "./utils.js"
import { TodoList } from "./mission1.js"

const data = [
    {
        text: 'JS 공부하기',
        isCompleted: false
    },
    {
        text: 'JS 복습하기',
        isCompleted: false
    },
    {
        text : "                   JS 과제하기    ",
        isCompleted: true
    }
]

const data2 = [
    {
        text: '게임하기',
        isCompleted: true
    },
    {
        text: '축구하기',
        isCompleted: false
    },
    {
        text : "독서하기",
        isCompleted: true
    }
]

const data3 = [
    {
        text: '밥',
        isCompleted: false
    },
    {
        text: '라면',
        isCompleted: true
    },
    {
        text : "치킨",
        isCompleted: false
    }
]


addNewDiv("todo-list");
addNewDiv("play-list");
addNewDiv("food-list");

let test = new TodoList(data);
let test2 = new TodoList(data2, "#play-list");
let test3 = new TodoList(data3, "#food-list");

test.render();
test2.render();
test3.render();