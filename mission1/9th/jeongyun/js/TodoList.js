const checkData = (data) => {
  if(!data) {
    throw new Error('TypeError: null or undefined has no properties');
  }
  if(!Array.isArray(data)) {
    throw new Error('TypeError: data is not iterable');
  }
  data.forEach(item => {
    if(!item.text) {
      throw new Error('ReferenceError: item.text is not defined');
    }
    if(!typeof item.text === 'string') {
      throw new Error('TypeError: item.text  is not string');
    }
  })
}

const addToDo = (element, toDos) => {
  toDos.forEach(toDo => {
    const child = document.createElement("li");
    child.innerHTML = toDo.text;
    element.appendChild(child);
  })
}

function TodoList(id, data) {
  // new 키워드 안 붙이고 함수 실행 시 에러 처리
  if (!new.target) {
    throw new Error('not called with new');
  } 

  // 파라메터로 받은 data this.data에 할당
  this.id = id
  this.toDos = data;

  this.render = (toDos) => {
    const element = document.createElement("ul")
    addToDo(element, toDos)
    document.querySelector(this.id).appendChild(element)
  }

  checkData(this.toDos)
  this.render(this.toDos);

}
      

export default TodoList;