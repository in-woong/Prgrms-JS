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
        this.dataValidator(data);
        this.selectorValidator(selector);
        this.data = data;
        this.element = document.querySelector(selector);
    }

    dataValidator = function(data) {
        if(data === null || data === undefined) {
            throw new Error('data 값을 전달해주세요.');
        } else if(!Array.isArray(data)) {
            throw new Error('data 는 배열형태입니다.');
        }
    }

    selectorValidator = function(selector) {
        if(document.querySelector(selector) === null) {
            throw new Error('해당 element 가 존재하지 않습니다.');
        }
    }

    getInnerHTML = function() {
        const innerText = this.data.map((value) => {
            if(value.isCompleted)
                return `<li><s>${value.text}</s></li>`
            else
                return `<li>${value.text}</li>`;
        }).join('');

        return innerText;
    }

    dataChangeText = function(array) {
        return array.map(value => JSON.stringify(value)).join('');
    }

    setState = function(nextData) {
        this.dataValidator(nextData);

        if(this.dataChangeText(nextData) === this.dataChangeText(this.data))
            return;

        this.data = nextData;
        this.element.innerHTML = `<ul>${this.getInnerHTML()}</ul>`;
    }

    render = function() {
        this.element.innerHTML = `<ul>${this.getInnerHTML()}</ul>`;
    }
}

var todoList = new TodoList(todoData, '#todo-list');
var weekendList = new TodoList(weekendData, '#weekend-list');
var monthList = new TodoList(monthData, '#month-list');

todoList.render();
weekendList.render();
monthList.render();
monthList.setState([{text: '프로그래머스 이수'}]);