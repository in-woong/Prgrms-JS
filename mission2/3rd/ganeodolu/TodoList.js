function TodoList(listname, data) {
    this.data = data;
    this.listname = listname;
    // 반복되지 않게 함수선언에서 new 사용과 data의 array 판별을 밖으로 빼냄
    if (this === window) {
        throw new Error("함수 선언시 new를 사용하여주세요.")
    }
    else if (Array.isArray(this.data) == false) {
        throw new Error("data가 array가 아닙니다.")
    }
    this.render = function () {

        // dataText 변수 안에 data객체안의 text의 value 값에 태그를 붙여서 저장
        let dataText = Object.values(this.data).map((val, idx) => {
            const delButton = `<button type="button" id="todo-del-button${idx}">삭제</button>`;
            if (!val.text) {            // data.text 값이 있는지 확인
                throw new Error("data가 null 또는 undefined입니다.")
            }
            // data.text 내용이 JS를 포함하지 않으며, 문자열이 아닌 경우를 데이터가 이상하다고 가정
            else if (val.text.indexOf("JS") === -1 || typeof (val.text) != "string") {
                throw new Error("JS에 관련된 내용이 아니거나, data 타입이 문자열이 아닙니다.")
            }
            // isCompleted 가 참이면 <strike>태그를 넣어서 저장(완료되었다는 의미), false면 <div>만 넣어서 저장
            return val.isCompleted ? `<li><span id="line${idx}">완료 <strike>${val.text}</strike></span> ${delButton}</li>` : `<li><span id="line${idx}">${val.text}</span> ${delButton}</li>`;
        }).join('');
        // console.log("datatext", dataText);    
        document.querySelector(`${this.listname}`).innerHTML = `${dataText}`
    }
    this.render();
    // 새로운 데이터를 불러서 다시 렌더링하는 setState함수
    this.setState = function (nextData) {
        this.data = nextData;
        this.render();
    }
}