const data1 = [
    {
        text: 'JS 공부하기',
        isCompleted: true
    },
    {
        text: 'JS 복습하기',
        isCompleted: false
    }
];

const data2 = [
    {
        text: '밀린 강의듣기',
        isCompleted: false
    },
    {
        text: '텀프 제출하기',
        isCompleted: true
    }
];

const data3 = [
    {
        text: '파이썬 공부하기',
        isCompleted: false
    },
    {
        text: '해커톤 준비하기',
        isCompleted: false
    }
];

function TodoList(data, id) {
    if (!(this instanceof TodoList)) {
        throw new Error("new 키워드로 인스턴스를 생성하지 않았습니다");
    }
    checkDataValidation(data);
    checkIdValidation(id);

    this.data = data;
    this.id = id;
    this.render = () => {
        const todoListHtml = this.data.map(todo => (todo.isCompleted) ? `<li>${todo.text}</li>` : `<li><s>${todo.text}</s></li>`).join('');
        document.querySelector(`#${id}`).innerHTML = `<ul>${todoListHtml}</ul>`;
    }
    this.render();

    this.setState = (nextData) => {
        this.data = nextData;
        this.render();
    }
}

function checkDataValidation(data) {
    if (!data) { // data가 null, undefined, 공백문자 일 때
        throw new Error("data가 유효하지 않습니다");
    } else if (!Array.isArray(data)) { // data가 array가 아닐 때
        throw new Error("data가 배열이 아닙니다");
    } else if (data.some((obj) => !obj.text || typeof obj.text !== 'string')) {
        // data의 text 요소가 string이 아니거나 값이 유효하지 않을 때
        throw new Error("data의 text가 유효하지 않습니다");
    }
}

function checkIdValidation(id) {
    if (!document.querySelector(`#${id}`)) {
        throw new Error("html element가 존재하지 않습니다");
    }
}

new TodoList(data1, "todo-list");
new TodoList(data2, "todo-day");
new TodoList(data3, "todo-week");
