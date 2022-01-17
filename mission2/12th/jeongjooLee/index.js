let data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]

const todoList = new TodoList(data, "todo-list");
todoList.render();

let $todoForm = document.querySelector("#todo-form");
let $todoInput = document.querySelector("#todo-input");
const $todoList = document.querySelector("#todo-list")



// 삭제버튼, todo 클릭 이벤트
const clickHandler = (e) => {
  let targetIdx
  if(e.target.tagName === "S"){
    targetIdx = e.target.parentNode.id;
    data[targetIdx].isCompleted = data[targetIdx].isCompleted ? false : true; 
    todoList.render();
  }else if(e.target.tagName === "BUTTON"){
    targetIdx = e.target.parentNode.id;
    data = data.filter((element, idx) => {
      return idx != targetIdx;
    })
    todoList.setState(data);
  }else{
    targetIdx = e.target.id;
    data[targetIdx].isCompleted = data[targetIdx].isCompleted ? false : true; 
    todoList.render();
  }
}


$todoList.addEventListener('click', clickHandler);
