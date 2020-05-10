var todoData = [
        {
            text: 'JS 공부하기',
            isCompleted: true
        },
        {
            text: 'JS 복습하기',
            isCompleted: true
        }
    ],
    weekendData = [
        {
            text: 'mission1 필수과제',
            isCompleted: true
        },
        {
            text: 'mission1 보너스 과제',
            isCompleted: false
        }
    ],
    monthData = [
        {
            text: '프로그래머스 참여',
            isCompleted: false
        }
    ];

class TodoList {
    constructor(data, selector) {
        this.validateData(data);
        this.validateSelector(selector);
        this.data = data;
        this.element = document.querySelector(selector);
    }

    validateData = function(data) {
        if(data === null || data === undefined) {
            throw new Error('data 값을 전달해주세요.');
        } else if(!Array.isArray(data)) {
            throw new Error('data 는 배열형태입니다.');
        } else {
            data.forEach(item => {
                if(!item.hasOwnProperty('text')) {
                    throw new Error('data는 text 속성값을 가지고 있어야합니다.');
                } else if (typeof item.text !== 'string') {
                    throw new Error('data는 text 속성은 string 타입입니다.');
                }

                if (typeof item.isCompleted !== 'boolean')
                    throw new Error('data는 isCompleted 속성은 boolean 타입입니다.');
            });
        }
    }

    validateSelector = function(selector) {
        if(document.querySelector(selector) === null) {
            throw new Error('해당 element 가 존재하지 않습니다.');
        }
    }

    createInnerHTML = function() {
        const innerText = this.data.map((value) => {
            return value.isCompleted ? `<li><s>${value.text}</s></li>` : `<li>${value.text}</li>`;
        }).join('');

        return innerText;
    }

    convertDataToString = function(array) {
        return array.map(value => JSON.stringify(value)).join('');
    }

    setState = function(nextData) {
        this.validateData(nextData);

        if(this.convertDataToString(nextData) === this.convertDataToString(this.data))
            return;

        this.data = nextData;
        this.render();
    }

    render = function() {
        this.element.innerHTML = `<ul>${this.createInnerHTML()}</ul>`;
    }
}

var todoList = new TodoList(todoData, '#todo-list');
var weekendList = new TodoList(weekendData, '#weekend-list');
var monthList = new TodoList(monthData, '#month-list');

todoList.render();
weekendList.render();
monthList.render();
monthList.setState([{text: '프로그래머스 이수'}]);