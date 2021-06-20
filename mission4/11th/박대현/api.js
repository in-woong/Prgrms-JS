const baseURL = 'https://todo-api.roto.codes';
const USER_NAME = 'daep93';

const getTodoList = async () => {
  // 사용자의 할 일 목록을 불러온다.
  const response = await fetch(`${baseURL}/${USER_NAME}`);
  return response.json();
};

const addTodo = async content => {
  // 사용자의 할 일 목록에 새로운 할 일을 추가한다.
  const response = await fetch(`${baseURL}/${USER_NAME}`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content
    })
  });
  return response.json();
};

const deleteTodo = async todo_id => {
  // 사용자의 할 일 목록에서 특정 할 일을 삭제한다.
  const response = await fetch(`${baseURL}/${USER_NAME}/${todo_id}`,{
    method: 'DELETE'
  });
  return response.json();
};

const deleteAllTodo = async () => {
  // 사용자의 할 일 목록을 전체 삭제한다.
  const response = await fetch(`${baseURL}/${USER_NAME}/all`,{
    method: 'DELETE'
  });
  return response.json();
};

const toggleTodoDone = async todo_id => {
  // 사용자의 할 일 목록에서 특정 할 일의 완료 처리를 뒤집는다.
  const response = await fetch(`${baseURL}/${USER_NAME}/${todo_id}/toggle`,{
    method: 'PUT'
  });
  return response.json();
};

export {getTodoList, addTodo, deleteTodo, deleteAllTodo, toggleTodoDone};

