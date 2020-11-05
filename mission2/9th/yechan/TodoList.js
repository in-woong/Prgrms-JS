//DATA
console.log("TodoList is loading")

const TODO_DATA = [
    {
        text: 'JS 공부하기',
        isCompleted: true
    },
    {
        text: 'JS 복습하기',
        isCompleted: false
    }
]
const SONG_DATA = [
    {
        text: 'Bluemoon - 창모&효린',
        isCompleted: true
    },
    {
        text: 'Creep - Radiohead',
        isCompleted: true
    }
]
const HOBBY_DATA = [
    {
        text: '잠자기',
        isCompleted: false
    },
    {
        text: '야식먹기',
        isCompleted: false
    }
]

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
    data.forEach(data => {
        // console.log(data)
        // if (!data.hasOwnProperty('text')) throw new Error(ERROR_MESSAGES.NOT_INCLUDE_DATA)
        if(typeof data.text !=='string') throw new Error(ERROR_MESSAGES.NOT_INCLUDE_DATA)
        if (data.isCompleted !==true && data.isCompleted !==false) throw new Error(ERROR_MESSAGES.INVALIDS_ISCOMPLETED_DATATYPE)
        if (data.text === null ||data.text=== undefined) throw new Error(ERROR_MESSAGES.INVALID_TEXT_DATATYPE)
    })
}

// class TodoList{
//     constructor({$target,onClick}){

//     }
// }

function TodoList(data,selector) {
    //new 키워드 사용여부 검사.
    if (!new.target) throw new Error(error.NOT_NEW)
    const createHTMLString = ( {text, isCompleted} ) => `<li>${isCompleted? `<s>${text}</s>`:`${text}`}</li>`

    this.setState = (nextData) => {
        // dataValidCheck(nextData)
        this.data = nextData;
        this.render()
    }
    this.render = function () {
        console.log(this)
        console.log(this.data)
        const todoHTMLString = this.data(createHTMLString).join('');
        document.querySelector(selector).innerHTML = todoHTMLString
    }
}

