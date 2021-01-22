import {RawData} from "./data/todoRawDatas.js";
import {message} from "./constantValue/message.js";

class controlToDoList {
    constructor(data) {
        this.toDoData = data;
        this.init();
    }

    init() {
        // initialize local Storage ... later.
    }

    dataValidation() {
        return Array.isArray(this.toDoData) && (typeof(this.toDoData) !== undefined) && (typeof(this.toDoData) !== null) ? true : false;
    }

    render() {
        const todoLists = document.querySelector("#todo-list");
        this.toDoData.forEach((rawData, index) => todoLists.innerHTML += `${index + 1}. ${rawData.text}</br>`);     
    }
}

const toDoObj = new controlToDoList(RawData);
toDoObj.dataValidation() ? toDoObj.render() : alert(message.RAW_DATA_TYPE_INAPPROPRIATE);
