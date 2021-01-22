import {RawData} from "./data/todoRawDatas.js";

class controlToDoList {
    constructor(data) {
        this.toDoData = data;
        this.init();
    }

    init() {
        // initialize local Storage ... later.
    }

    render() {
        const todoLists = document.querySelector("#todo-list");
        this.toDoData.forEach((rawData, index) => {
            todoLists.innerHTML += `${index + 1}. ${rawData.text}</br>`;
        })
    }
}

const toDoObj = new controlToDoList(RawData);
toDoObj.render();