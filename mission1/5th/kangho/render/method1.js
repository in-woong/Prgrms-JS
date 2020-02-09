//  for문 (loop?) 
//  가장 기초적인 for문, 변수 htmlString을 완성하여 querySelector.innerHTML로 렌더링

function todoList(data) {
    this.data = data;
    this.render = function() {
        var htmlString = '';
        for (var i=0; i<this.data.length; i++) {
            htmlString += `<div> ${this.data[i].text} </div>`;
        }
        document.querySelector('#idTodoList').innerHTML = htmlString;
    }
    this.render();
}