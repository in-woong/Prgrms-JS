/**
 * validate data
 * @param {Array} data 
 */
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
    if(typeof item.text !== 'string') {
      throw new Error('TypeError: item.text  is not string');
    }
  })
}

/**
 * update TodoList to data
 * @param {HTMLUListElement} element 
 * @param {Array} data 
 */
const addToDo = (element, data) => {
  // 데이터 검증
  checkData(data);
  // toDo 항목 생성
  data.forEach(item => {
    const child = document.createElement("li");
    child.innerHTML = item.isCompleted ? `<s>${item.text}</s>` : item.text;
    element.appendChild(child);
  })
}

function TodoList(id, data) {
  // 파라메터로 받은 data this.data에 할당
  this.id = id;
  this.toDos = data;
  this.element = document.createElement("ul");

  // new 키워드 안 붙이고 함수 실행 시 에러 처리
  if (!new.target) {
    throw new Error('not called with new');
  } 

 /**
  * update TodoList to nextData
  * @param {Array} nextData 
  */
  this.setState = (nextData) => {
    addToDo(this.element, nextData);
    document.querySelector(this.id).appendChild(this.element);
  }

 /**
  * create TodoList 
  * @param {Array} data 
  */
  this.render = () => {
    addToDo(this.element, this.toDos);
    document.querySelector(this.id).appendChild(this.element);
  }

  this.render();
}

export default TodoList;
