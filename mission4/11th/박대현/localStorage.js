const TODO_LIST_DATA = 'TODO-V1-D';
const makeIncodeValue = (key, value) => {
  const data = encodeURIComponent(JSON.stringify(value));
  localStorage.setItem(key, btoa(data));
};

const returnDecodeValue = value => {
  const decode = atob(value);
  const data = JSON.parse(decodeURIComponent(decode));
  return data;
};

// todo data를 localstorage에 암호화해서 저장하기
const saveTodoListDataToLocalStorage = todoListData => {
  try {
    makeIncodeValue(TODO_LIST_DATA, todoListData);
  } catch (error) {
    console.log(error);
    alert('용량을 초과했습니다!');
  }
};

const getTodoListDataFromLocalStorage = () => {
  if (localStorage.getItem(TODO_LIST_DATA)) {
    return returnDecodeValue(localStorage.getItem(TODO_LIST_DATA));
  }
  return [];
};
export { saveTodoListDataToLocalStorage, getTodoListDataFromLocalStorage };
