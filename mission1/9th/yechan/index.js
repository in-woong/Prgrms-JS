//data
const todo_data = [
    {
        text: 'JS 공부하기',
        isCompleted: true
    },
    {
        text: 'JS 복습하기',
        isCompleted: false
    }
]
const song_data = [
    {
        text: 'Bluemoon - 창모&효린',
        isCompleted: null
    },
    {
        text: 'Creep - Radiohead',
        isCompleted: true
    }
]
const hobby_data = [
    {
        text: '잠자기',
        isCompleted: false
    },
    {
        text: '야식먹기',
        isCompleted: false
    }
]

//error data
const ERROR_MESSAGES = {
    NOT_INCLUDE_DATA: "유효하지 않은 데이터입니다.",
    INVALIDS_ISCOMPLETED_DATATYPE : "isComplted 값이 올바르지 않습니다.",
    NOT_ARRAY_DATA: "데이터 타입이 ARRAY가 아닙니다.",
    NOT_NEW: "인스턴스가 아닙니다. new 키워드를 사용해 생성자를 만들어주세요.",
    INVALID_TEXT_DATATYPE: "text 값이 null이거나 undefined입니다. 유효한 값을 입력해 주세요."
}

// 이곳에서 코딩을 시작하세요!

//error check
const dataValidCheck = (data) => {
    //배열여부 검사
    if (!Array.isArray(data)) throw new Error(ERROR_MESSAGES.NOT_ARRAY_DATA)
    //text 데이터를 가지고 있는지 여부 검사
    data.forEach(data => {
        // console.log(data)
        if (!data.hasOwnProperty('text')) throw new Error(ERROR_MESSAGES.NOT_INCLUDE_DATA)
        if (data.isCompleted !==true && data.isCompleted !==false) throw new Error(ERROR_MESSAGES.INVALIDS_ISCOMPLETED_DATATYPE)
        if (data.text === null ||data.text=== undefined) throw new Error(ERROR_MESSAGES.INVALID_TEXT_DATATYPE)
    })
}

function TodoList(data, selector) {
    //new 키워드 사용여부 검사.
    if (!new.target) throw new Error(error.NOT_NEW)
    const createHTMLString = ( {text, isCompleted} ) => {
        return `<div>${isCompleted ? `<s>${text}</s>` : `${text}`}</div>`
    }
    this.setState = (nextData,selector) => {
        dataValidCheck(nextData)
        this.selector = selector;
        this.data = nextData;
        this.render()
    }
    this.render = function () {
        const todoHTMLString = this.data.map(createHTMLString).join('');
        console.log("todoHTMLString : " + todoHTMLString)
        document.querySelector(selector).innerHTML = todoHTMLString
    }
}
const todoList = new TodoList(todo_data,"#todo-list");
setTimeout(() => { todoList.setState(todo_data) }, 0)
setTimeout(() => { todoList.setState(song_data) }, 3000)
setTimeout(() => { todoList.setState(hobby_data) }, 6000)
