import {message} from "../constantValue/message.js";

class ControlToDoList {
    constructor(rawData, $todoId, toDoListTitle) {
        this.toDoRawData = rawData;
        this.todoListElement = document.getElementById(`${$todoId}`);
        this.toDoListTitle = toDoListTitle;
        this.checkDataForm(this.toDoRawData);
        this.render();
    }

    checkDataForm() {
        if(Array.isArray(this.toDoRawData) === false) {
            throw new Error(message.RAW_DATA_TYPE_INAPPROPRIATE);
        }
        if(!this.toDoRawData) {
            throw new Error(message.RAW_DATA_TYPE_INAPPROPRIATE);
        }
    }

    render() {
        const todoDataHTMLString = this.toDoRawData.map((rawData, index) => {
            return rawData.isCompleted 
            ? `<s>${index + 1}. ${rawData.text}</s></br>` : `${index + 1}. ${rawData.text}</br>`
        }).join("");

        this.todoListElement.innerHTML = `
        <h3>${this.toDoListTitle}</h3>
        ${todoDataHTMLString}
      `;
    }

    setState(nextData) {
        this.toDoRawData = nextData;
        this.checkDataForm();
        this.render();
    }
}

export {ControlToDoList} 
