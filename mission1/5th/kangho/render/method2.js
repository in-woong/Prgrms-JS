//  array.forEach()
//  리턴값이 없다는 게 기본 for문과 동일

function todoList(data) {
    this.data = data;
    this.render = function() {
        var htmlString = '';
        this.data.forEach(function(list) {
            htmlString += `<div> ${list.text} </div>`;
        })
        document.querySelector('#idTodoList').innerHTML = htmlString;
    }
    this.render();
}