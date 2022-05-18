const datas = [
    {
        text: 'JS 공부하기',
        isCompleted: true
    },
    {
        text: 'JS 복습하기',
        isCompleted: false
    },
    {
        text: 'React를 공부하기',
        isCompleted: false
    },
    {
        text: 'Node.js 좋아하기',
        isCompleted: true
    },
    {
        text: '열심히 노력하기',
        isCompleted: true
    },
    {
        text: '지치지 말기',
        isCompleted: true
    },
];

const newDatas = [
    {
        text: '상태관리 공부하기',

    },
    {
        text: 'CS 공부하기',
        isCompleted: false
    },
    {
        text: 'React를 공부하기',
        isCompleted: true
    },
    {
        text: 'Node.js 좋아하기',
        isCompleted: false
    },
    {
        text: '열심히 노력하기',
        isCompleted: true
    },
    {
        text: '지치지 말기',
        isCompleted: true
    },
];

const buyDatas = [
    {
        text: '자차 장만',
        isCompleted: false
    },
    {
        text: '자가 장만',
        isCompleted: false
    },
    {
        text: '맥북 프로 구입',
        isCompleted: false
    },
    {
        text: '아이폰 구매',
        isCompleted: true
    },
]

const wishDatas = [
    {
        text: '세계 여행',
        isCompleted: false
    },
    {
        text: '뉴욕 여행',
        isCompleted: true
    },
    {
        text: '해외 취직',
        isCompleted: false
    },
    {
        text: '일단 취직',
        isCompleted: false
    }
]

const $ = (selector) => document.querySelector(selector);
const throwError = (description) => { throw new Error(description) };

/**
 * checkValidate
 * 
 * 유효성을 체크하는 함수입니다.
 *
 * @param {Array} datas
 * @return {Object} 
 */

const checkValidate = (datas) => {

    let state = {
        isValid: true,
        description: ''
    }
    
    if (!Array.isArray(datas)) state = { ...state, isValid: false, description: '전달된 인수는 배열이 아닙니다.' };

    const isSuitable = datas.every((data) => (data.hasOwnProperty('text') && Boolean(data.text)) &&
                                             (data.hasOwnProperty('isCompleted') && typeof (data.isCompleted) === 'boolean'));
                                
    if (!isSuitable) state = { ...state, isValid: false, description: 'todo의 요소가 적합하지 않습니다.' };

    return state;
}

/**
 * isDataValid
 * 
 * checkValiate로 부터 받은 상태값을 확인하여, 데이터가 유효한지 확인한다.
 * 
 * @param {Array} datas
 */

const isDataValid = (datas) => {
    const { isValid, description } = checkValidate(datas);

    if (!isValid) throwError(description);
}

class TodoList {

    /**
     * constructor
     * 
     * 일단 생성자 함수를 통해 데이터와 선택자를 받습니다.
     * 
     * 그리고 초기화 전에, 이 데이터의 유효성을 체크합니다.
     * 
     * @param {Array} datas 
     * @param {string} selector 
     */
    
    constructor(datas, selector) {
        isDataValid(datas);

        this.datas = datas;
        this.$todoList = $(`#${selector}`);
        this.render();
    }

    /**
     * parseToHTML
     * 
     * 데이터를 HTML에 넣어주기 위해, string으로 변환하는 함수입니다.
     * 
     * 만약, Todo가 완료된 것이라면 <s></s> 태그로 감싸줍니다.
     * 
     * @returns {string} ul li 요소들의 문자열
     */

    parseToHTML() {
        return `<ul>${this.datas.map(({ text, isCompleted }) =>
            (isCompleted)
                ? `<li><s>${text}</s></li>`
                : `<li>${text}</li>`
            ).join('')}</ul>`
    }

    render() {
        this.$todoList.innerHTML = this.parseToHTML();
    }

    setState(datas) {
        isDataValid(datas);

        this.datas = datas;
        this.render();
    }
}

try {
    const todoList = new TodoList(datas, 'todo-list');
    todoList.setState(newDatas);

    const buyList = new TodoList(buyDatas, 'buy-list');

    const wishList = new TodoList(wishDatas, 'wish-list');
    
} catch (e) {
    console.error(e);
}
