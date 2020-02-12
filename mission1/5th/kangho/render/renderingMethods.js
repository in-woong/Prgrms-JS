// //  for문 (loop?) 
// //  가장 기초적인 for문, 변수 htmlString을 완성하여 querySelector.innerHTML로 렌더링

// function todoList(data) {
//     this.data = data;
//     this.render = function() {
//         var htmlString = '';
//         for (var i=0; i<this.data.length; i++) {
//             htmlString += `<div> ${this.data[i].text} </div>`;
//         }
//         document.querySelector('#idTodoList').innerHTML = htmlString;
//     }
//     this.render();
// }


// //  array.forEach()
// //  리턴값이 없다는 게 기본 for문과 동일

// function todoList(data) {
//     this.data = data;
//     this.render = function() {
//         var htmlString = '';
//         this.data.forEach(function(list) {
//             htmlString += `<div> ${list.text} </div>`;
//         })
//         document.querySelector('#idTodoList').innerHTML = htmlString;
//     }
//     this.render();
// }


// //  array.map() 
// //  해당 index 자리에 return값 반환, idTodoList에 직접 html string 렌더링

// function todoList(data) {
//     this.data = data;
//     this.render = function() {
//         this.data.map(list => idTodoList.innerHTML += `<div> ${list.text} </div>`);
//     }
//     this.render();
// }


// //  array.reduce() 
// //  idTodoList에 직접 html string 렌더링, 왼쪽 값에 오른쪽 값들을 차례로 더하며 누적 후 리턴

// function todoList(data) {
//     if (!(this instanceof todoList)) {
//         throw new Error('Error 1: no new keyword');
//     }
//     checkData(data);
//     this.data = data;
//     this.render = function() {
//         idTodoList.innerHTML = this.data.reduce((htmlString, list) => htmlString + `<div> ${list.text} </div>`, '');
//     }
//     this.render();
// }
