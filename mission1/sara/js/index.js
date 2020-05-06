var todoData = [
        {
            text: 'JS 공부하기'
        },
        {
            text: 'JS 복습하기'
        }
    ],
    weekendData = [
        {
            text: 'mission1 필수과제'
        },
        {
            text: 'mission1 보너스 과제'
        }
    ],
    monthData = [
        {
            text: '프로그래머스 이수'
        }
    ];

class TodoList {
    constructor(data, selector) {
        this.dataValidator(data, selector);
        this.data = data;
        this.element = document.querySelector(selector);
    }

    dataValidator = function(data, selector) {
        if(data === null || data === undefined) {
            throw new Error('data 값을 전달해주세요.');
        } else if(!Array.isArray(data)) {
            throw new Error('data 는 배열형태입니다.');
        }

        if(document.querySelector(selector) === null) {
            throw new Error('해당 element 가 존재하지 않습니다.');
        }
    }

    render = function() {
        this.element.innerHTML = `<ul>${this.data.map(value => `<li>${value.text}</li>`).join('')}</ul>`;
    }
}

var todoList = new TodoList(todoData, '#todo-list');
var weekendList = new TodoList(weekendData, '#weekend-list');
var monthList = new TodoList(monthData, '#month-list');

todoList.render();
weekendList.render();
monthList.render();