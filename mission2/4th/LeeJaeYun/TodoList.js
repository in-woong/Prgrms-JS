class TodoList {
    constructor(data, id) {
        this.data = this._validate(data);
        this.id = id;
    }

    setState(nextData) {
        this.data = this._validate(nextData);
        this.render();
    }

    addNewTodo = () => {
        const $newTodo = document.querySelector("#new-todo");
        const newTodoText = $newTodo.value;
        if(newTodoText !== "") {
            const newTodo = {text: newTodoText, isComplete: false};
            this.data.push(newTodo);
            this.setState(this.data);
            $newTodo.value = "";
        }
    };

    registerDeleteEvent() {
        const $deleteButtons = document.querySelectorAll(`#${this.id} button`);
        $deleteButtons.forEach(btn => btn.addEventListener("click", this.deleteTodo))
    }

    deleteTodo = (event) => {
        const index = this.convertIdToNum(event.target.value);
        this.data.splice(index, 1);
        this.setState(this.data);
    };

    registerStrikeEvent() {
        const $todoDivs = document.querySelectorAll(`#${this.id} span`);
        $todoDivs.forEach(elem => elem.addEventListener("click", this.addStrike))
    }

    addStrike = (event) => {
        const index = this.convertIdToNum(event.target.id);
        const originText = this.data[index].text;
        const originIsComplete = this.data[index].isComplete;
        
        this.data.splice(index, 1, {text: originText, isComplete: !originIsComplete});
        this.setState(this.data);
    };

    convertIdToNum(id) {
        const numId = parseInt(id, 10);
        if (isNaN(numId)) {
            throw new Error("Invalid Id");
        }
        return numId;
    }

    _validate(data) {
        if (validator.isNotArray(data)) {
            throw new Error("Invalid data");
        } else if (!data.every(elem => validator.isValidContent(elem, {text: 'string', isComplete: 'boolean'}))) {
            throw new Error("Invalid content");
        } else {
            return data;
        }
    }

    render() {
        let htmlString = '';
        this.data.forEach((element, index) => (element.isComplete) ? htmlString +=`<div><del><span id = ${index}>${element.text}</span></del></div>
                <button value = ${index}>삭제</button>` :
            htmlString += `<div><span id = ${index}>${element.text}</span></div><button value = ${index}>삭제</button>`);
        document.querySelector(`#${this.id}`).innerHTML = htmlString;
        this.registerDeleteEvent();
        this.registerStrikeEvent();
    }
}