import {rawData, derekDoneRawData, derekToDoRawData} from "./data/todoRawDatas.js";
import {ControlToDoList} from "./class/ControlToDoList.js";

const toDoObj = new ControlToDoList(rawData, "todo-list", "TO Do List");

setTimeout(() => {
    toDoObj.setState([{text: "앞구르기", isCompleted: true}, {text: "뒷구르기", isCompleted: false}]);
}, 3000);

const derekToDoObj = new ControlToDoList(derekToDoRawData, "todo-list-derek", "Derek To Do List");
const derekDoneObj = new ControlToDoList(derekDoneRawData, "done-list-derek", "Derek Done List");