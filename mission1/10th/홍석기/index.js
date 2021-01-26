import {rawData, derekDoneRawData, derekToDoRawData} from "./data/todoRawDatas.js";
import {message} from "./constantValue/message.js";
import {ControlToDoList} from "./class/classHandler.js";

const toDoObj = new ControlToDoList(rawData, "todo-list", "TO Do List");
toDoObj.checkDataForm() ? toDoObj.render() : (function() {throw new Error(message.RAW_DATA_TYPE_INAPPROPRIATE)})
toDoObj.setState([{text: "앞구르기", isCompleted: true}, {text: "뒷구르기", isCompleted: false}]);

const derekToDoObj = new ControlToDoList(derekToDoRawData, "todo-list-derek", "Derek To Do List");
derekToDoObj.checkDataForm() ? derekToDoObj.render() :  (function() {throw new Error(message.RAW_DATA_TYPE_INAPPROPRIATE)})

const derekDoneObj = new ControlToDoList(derekDoneRawData, "done-list-derek", "Derek Done List");
derekDoneObj.checkDataForm() ? derekDoneObj.render() : (function() {throw new Error(message.RAW_DATA_TYPE_INAPPROPRIATE)})
