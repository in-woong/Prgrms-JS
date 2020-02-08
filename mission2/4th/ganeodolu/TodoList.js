function TodoList($target, data) {
    this.$target = $target
    this.data = data
    // 반복되지 않게 함수선언에서 new 사용과 data의 array 판별을 밖으로 빼냄
    if (this === window) {
        throw new Error(error.NO_USED_NEW_KEYWORD)
    }
    else if (Array.isArray(this.data) == false) {
        throw new Error(error.NOARRAY_DATA)
    }

    this.render = function () {
        // renderHTMLText 변수 안에 data객체안의 text의 value 값에 태그를 붙여서 저장
        const renderHTMLText = this.data.map((val, idx) => {
            const delButton = `<button type="button" id="todo-del-button${idx}">삭제</button>`;
            if (!val.text) {            // data.text 값이 있는지 확인
                throw new Error(error.NOT_DATA)
            }
            // data.text 내용이 문자열이 아닌 경우를 데이터가 이상하다고 가정
            else if (typeof (val.text) != "string") {
                throw new Error(error.INVALID_DATA)
            }
            // isCompleted 가 참이면 <strike>태그를 넣어서 저장(완료되었다는 의미), false면 <div>만 넣어서 저장
            return val.isCompleted ? `<li><span id="line${idx}">완료 <strike>${val.text}</strike></span> ${delButton}</li>` : `<li><span id="line${idx}">${val.text}</span> ${delButton}</li>`;
        }).join('');
        // console.log("renderHTMLText", renderHTMLText);    
        this.$target.innerHTML = `${renderHTMLText}`
    }
    this.setState = function (nextData) {
        this.data = nextData
        this.render()
    }

    this.render()
}