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
      throw new Error('TypeError: item.text is not string');
    }
    if(!item.hasOwnProperty('isCompleted')) {
      throw new Error('ReferenceError: item.isCompleted is not defined');
    }
    if(typeof item.isCompleted !== 'boolean') {
      throw new Error('TypeError: item.isCompleted is not boolean');
    }
  })
}


/**
 * 
 * @param {string} id 
 * @param {Array} data 
 */
function TodoList(id, data) {
  // 파라메터로 받은 data this.data에 할당
  this.id = id;
  this.toDos = data;

  // new 키워드 안 붙이고 함수 실행 시 에러 처리
  if (!new.target) {
    throw new Error('not called with new');
  } 

 /**
  * update TodoList to nextData
  * @param {Array} nextData 
  */
  this.setState = (nextData) => {
    this.toDos = nextData;
    this.render();
  }

 /**
  * create TodoList 
  */
  this.render = () => {
    // 데이터 검증
    checkData(this.toDos);
    // toDo 항목 생성
    document.querySelector(this.id).innerHTML = `<ul>${this.toDos.map(item => 
      item.isCompleted ? `<li><s>${item.text}</s><li>` : `<li>${item.text}<li>`).join('')}</ul>`
  }

  this.render();
}

export default TodoList;
