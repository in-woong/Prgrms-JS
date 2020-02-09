//  array.reduce() 
//  idTodoList에 직접 html string 렌더링, 왼쪽 값에 오른쪽 값들을 차례로 더하며 누적 후 리턴

function todoList(data) {
    this.data = data;
    this.render = function() {
        idTodoList.innerHTML = this.data.reduce((htmlString, list) => htmlString + `<div> ${list.text} </div>`, '');
    }
    this.render();
}
