class ControlToDoList {
    constructor(data, id, title) {
        this.toDoData = data;
        this.todoListElement = document.getElementById(`${id}`);
        this.title = title;
    }

    checkDataForm() {
        return Array.isArray(this.toDoData) && this.toDoData !== undefined && this.toDoData !== null ? true : false
    }

    render() {
        let todoDataHTMLString = "";
        todoDataHTMLString = this.toDoData.map((rawData, index) => {
            return rawData.isCompleted 
            ? `<s>${index + 1}. ${rawData.text}</s></br>` : `${index + 1}. ${rawData.text}</br>`
        }).join("");

        this.todoListElement.innerHTML = `
        <h3>${this.title}</h3>
        ${todoDataHTMLString}
      `;
    }

    setState(nextData) {
        this.toDoData = nextData;
        this.render();
    }
}

export {ControlToDoList} 