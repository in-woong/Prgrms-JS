import { dataStudy, dataExercise, dataPlay } from './data.js';

class TodoList {
    constructor(title) {
        this.title = title;
    }

    setState = ( nextData ) => {
        this.nextData = nextData;
        this.validator(this.title, nextData);
        this.render();
    };

    validator = (title, data) => {
        if(data === null || data === undefined || title === null || title === undefined) { 
            throw new Error("Invalid parameter")
        };

        if(!Array.isArray(data)) {throw new Error("Data is not array")};

        if(typeof title !== 'string') {throw new Error("Title is must be type of string")};

        data.map((item) => {
            if(item.text.length < 1) {
                throw new Error("Data does not have any text")
            }
        });
    };

    render = () => {
        const app = document.querySelector('#app');
        const container = document.createElement('div');

        container.classList.add(this.title);
        app.appendChild(container);
        container.innerHTML += `<strong class="title">${this.title}</strong>`;
        this.nextData.map(item => { 
           item.isCompleted ? 
           container.innerHTML += `<div><s>${item.text}</s></div` : 
           container.innerHTML += `<div>${item.text}</div>`
        });
    };
}

new TodoList('todo-list').setState(dataStudy);
new TodoList('exercise-list').setState(dataExercise);
new TodoList('play-list').setState(dataPlay);