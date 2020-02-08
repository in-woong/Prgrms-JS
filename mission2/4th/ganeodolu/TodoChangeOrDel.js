function TodoChangeOrDel($target, data, onTodoChangeOrDel) {
    this.$target = $target;
    this.data = data;

// 모두삭제버튼 위치
    const $todoRemoveAll = document.getElementById('todo-removeAll-button'); // 텍스트상자 연결변수

    // 텍스트 클릭시 true false 변환 기능
    // const todoChangeText = function () {
    // 이벤트 위임 적용을 위하여 발생될 이벤트보다 상위의 todoListTop을 연결
    $target.addEventListener('click', function (event) {
        let i = -1;  // 인덱스 변수,  조건문이 안맞을시 data가 없는 값이 되도록함

        if (event.target.nodeName === "SPAN") {
            i = Number(event.target.id.substr(4)) // Id 뒷번호 추출
        }
        // SPAN안에 STRIKE 태그가 있어서 if문 추가 
        // 만약 안하면 취소선 글자를 클릭시 SPAN까지 올라가지 않고 STRIKE에서 정지되며,
        // id번호를 찾을 수 없어서 첫번째 것만 true에서 false로 변경됨
        else if (event.target.parentNode.nodeName === "SPAN") {
            i = Number(event.target.parentNode.id.substr(4)) // Id 뒷번호 추출
        }  
        // 삭제버튼 클릭시 할일 삭제
        // const를 사용하여 삭제될때 다음 data가 내려오면서 iscompleted값이 변하지 않도록함
        else if (event.target.id.substr(0, 15) === "todo-del-button") {
            const i = Number(event.target.id.substr(15))
            data.splice(i, 1);
        }
        // data의 isCompleted가 true일때 false로 바꿔주는 것, vice versa
        // 삭제버튼을 눌렀을 때 아래가 적용되지 않게 하기 위하여 i 기본값을 -1로 지정
        if (data[i]) {
            data[i].isCompleted = data[i].isCompleted ? false : true;
        }
        onTodoChangeOrDel(data);
    })


// (커스텀이벤트) 

    const EVENT_NAME = 'removeAll';
    // 모든 할일 삭제 커스텀이벤트 
    $target.addEventListener(EVENT_NAME, function(){
        data = [];
        onTodoChangeOrDel(data);
    })
    // 모두 삭제 버튼 클릭시 커스텀이벤트 실행
    $todoRemoveAll.addEventListener('click', function () {
        $target.dispatchEvent(new Event(EVENT_NAME))
    })
};