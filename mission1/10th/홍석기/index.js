import {RawData, derekDoneRawData, derekToDoRawData} from "./data/todoRawDatas.js";
import {message} from "./constantValue/message.js";
import {controlToDoList, conrtrolDerekToDoList} from "./class/classHandler.js";

const toDoObj = new controlToDoList(RawData);
toDoObj.dataValidation() ? toDoObj.render() : (function() {throw new Error(message.RAW_DATA_TYPE_INAPPROPRIATE)})

const derekDoneObj = new conrtrolDerekToDoList(derekDoneRawData);
derekDoneObj.dataValidation() ? derekDoneObj.renderDerekTodoList() : (function() {throw new Error(message.RAW_DATA_TYPE_INAPPROPRIATE)})

const derekToDoObj = new conrtrolDerekToDoList(derekToDoRawData);
derekToDoObj.dataValidation() ? derekToDoObj.renderDerekDoneList() :  (function() {throw new Error(message.RAW_DATA_TYPE_INAPPROPRIATE)})