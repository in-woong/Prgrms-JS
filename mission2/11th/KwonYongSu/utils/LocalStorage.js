function getLocalStorageData(){
  return JSON.parse(localStorage.getItem('TodoList')) || [];
}
function setLocalStorageData(todoList){
  localStorage.setItem('TodoList',JSON.stringify(todoList));
}

export {getLocalStorageData,setLocalStorageData};