function TodoList(dataList, targetId) {
    this.state = dataList

    this.validation = (state) => {
        if(!new.target) {
        throw new Error("no use new keword");
        }

        errorTest(this.state)
    }

    this.render = () => {
        const todoList = document.querySelector(targetId);
        todoList.innerHTML = this.state.map(({ text, isCompleted }) => (isCompleted ? `<div>${text}</div>` : `<div><s>${text}</s></div>`)).join('')
    }

    this.setState = (nextState) => {
        errorTest(nextState)
        this.state = nextState
        this.render()
    }

    this.validation();
    this.render();
    }

function errorTest(data) {
    if(data === null || data === undefined) {
        throw new Error("Data is empty");
    }
    if(!Array.isArray(data)) {
        throw new Error("Data is not array");
    }

        data.forEach((value) => {
        if (typeof value.text !== 'string'){
            throw new Error("The content of the data is strange");
        }
        if(value == null || value == undefined) {
            throw new Error("data value is empty");
        }
        })
    }