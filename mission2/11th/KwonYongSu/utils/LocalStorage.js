// localStorage의 값을 읽어온다.
function getLocalStorageData(){
  // String의 값을 javascript의 데이터 타입으로 parsing후 반환한다.
  return JSON.parse(localStorage.getItem('TodoList')) || [];
}

// localStorage에 값을 저장한다.
function setLocalStorageData(todoList){
  // JSON.stringify를 적용하지 않으면 object 형태로 값이 저장된다.
  localStorage.setItem('TodoList',JSON.stringify(todoList));
}

export {getLocalStorageData,setLocalStorageData};