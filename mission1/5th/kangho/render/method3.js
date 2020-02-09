//  array.map() 
//  해당 index 자리에 return값 반환, idTodoList에 직접 html string 렌더링

function todoList(data) {
    this.data = data;
    this.render = function() {
        this.data.map(list => idTodoList.innerHTML += `<div> ${list.text} </div>`);
    }
    this.render();
}