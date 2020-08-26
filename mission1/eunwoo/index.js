const studyTodoData = [
    {
        text: 'JS 공부하기',
        isCompleleted: true,
    },
    {
        text: 'JS 복습하기',
        isCompleleted: false,
    }
];
const playTodoData = [
    {
        text: 'Netflix 시청하기',
        isCompleleted: false,
    },
    {
        text: '맥주 마시기',
        isCompleleted: true,
    },
    {
        text: '밀린 웹툰 몰아보기',
        isCompleleted: true,
    }
];

const gardenTodoData = [
    {
        text: '잡초 뽑기',
        isCompleleted: false,
    },
    {
        text: '꽃에 물주기',
        isCompleleted: false,
    }
];

function isArray(obj) {
    return !!obj && obj.constructor === Array;
}

class TodoList {
    constructor(element, dataList) {
        try {
            this.inputValidator(dataList);
            this.dataList = dataList;
            this.element = element;
            this.render(element);
        } catch(error) {
            console.error(error);
        }
    }

    inputValidator(dataList) {
        if (dataList == null) {
            throw new Error('dataList is null or undefined');
        }
        if (!isArray(dataList)) {
            throw new Error('dataList is not an Array');
        }
        dataList.forEach(data => {
            if (data.text === undefined) {
                throw new Error('dataList element has no text field.');
            }
            if (data.isCompleleted === undefined) {
                throw new Error('dataList element has no isCompleted field.');
            }
            if (typeof data.isCompleleted !== 'boolean') {
                throw new Error('isCompleted field type is not boolean.');
            }
        });
    }

    render(element) { 
        if (element == null) {
            throw new Error('element is null');
        }
        element.innerHTML = '';
        this.dataList.forEach(data => {
            element.innerHTML += data.isCompleleted === true ? 
                `<li><s>${data.text}<s></li>` : `<li>${data.text}</li>`;
        });
    }

    setState(nextData) {
        try {
            this.inputValidator(nextData);
            this.dataList = nextData;
            this.render(this.element);
        } catch(error) {
            console.error(error);
        }
    }
}

let currentState = 'study';
const todoElement = document.querySelector('#todo-list');
const todoList = new TodoList(todoElement, studyTodoData);

const switchButton = document.getElementById('switch-todo');
if (switchButton !=  null) {
    switchButton.onclick = () => {
        if (currentState === 'study') {
            todoList.setState(gardenTodoData);
            currentState = 'garden'
        } else if (currentState === 'garden') {
            todoList.setState(playTodoData);
            currentState = 'play'
        } else if (currentState === 'play') {
            todoList.setState(studyTodoData);
            currentState = 'study'
        }
    };
}

//validator test
// new TodoList(todoElement, null);
// new TodoList(todoElement, undefined);
// new TodoList(todoElement, 3);
// new TodoList(todoElement, [{no: 'textfield'}]);
// const testTodo = new TodoList(todoElement, [{text: 'Netflix 시청하기',isCompleleted: true,}]);
// testTodo.setState([{text: 'Netflix 시청하기', isCompleleted: 'hello',}]);