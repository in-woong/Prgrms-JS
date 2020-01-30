// import error from './error.js'

// Mission1 TodoList 컴포넌트 작성 + 보너스 구현사항 다중 컴포넌트 추가 + isCompleted 처리
function TodoList(elementId, data) {
    this.data = data;
    this.elementId = elementId;
    // 반복되지 않게 함수선언에서 new 사용과 data의 array 판별을 밖으로 빼냄
    if (this === window) {
        throw new Error(error.NO_USED_NEW_KEYWORD);
    }
    else if (Array.isArray(this.data) == false) {
        throw new Error(error.NOARRAY_DATA);
    }
    this.render = function () {
        // renderHTMLText 변수 안에 data객체안의 text의 value 값에 태그를 붙여서 저장
        const renderHTMLText = this.data.map((val) => {
            if (!val.text) {            // data.text 값이 있는지 확인
                throw new Error(error.NOT_DATA);
            }
            // 문자열이 아닌 경우를 데이터가 이상하다고 가정
            else if (typeof (val.text) != "string") {
                throw new Error(error.INVALID_DATA)
            }
            // isCompleted 가 참이면 <div>태그를 넣어서 저장, false면 취소선을 넣어서 저장
            return val.isCompleted ? `<div>${val.text}</div>` : `<strike>${val.text}</strike>`;
        }).join('');
        document.querySelector(`${this.elementId}`).innerHTML = `${renderHTMLText}`
    }
    this.render();
    // 새로운 데이터를 불러서 다시 렌더링하는 setState함수
    this.setState = function (nextData) {
        this.data = nextData;
        this.render();
    }
}