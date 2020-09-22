const SERVER_URL = 'https://todo-api.roto.codes';
const requestParam = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json'
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
}

const responseHandler = async (response) => {
  try {
    if (response.ok || response.status === 200) {
      return response.json();
    } else {
      console.log(response.status);
    }
  } catch(e) {
    throw e
  }
}

async function getTodo(username) {
  requestParam.method = 'GET';

  try {
    const response = await fetch(`${SERVER_URL}/${username}`, requestParam);
    return await responseHandler(response);
  } catch (e) {
    throw e
  }
}

async function addTodo(username, data) {
  requestParam.method = 'POST';
  requestParam.body = JSON.stringify({ content: data });

  try {
    const response = await fetch(`${SERVER_URL}/${username}`, requestParam);
    return await responseHandler(response);
  } catch (e) {
    throw e
  }
}

async function deleteAllTodo(username) {
  requestParam.method = 'DELETE';

  try {
    const response = await fetch(`${SERVER_URL}/${username}/all`, requestParam);
    return await responseHandler(response);
  } catch (e) {
    throw e
  }
}

async function updateTodoState(username, data) {
  requestParam.method = 'PUT';

  try {
    const response = await fetch(`${SERVER_URL}/${username}/${data}/toggle`, requestParam);
    return await responseHandler(response);
  } catch (e) {
    throw e
  }
}

async function getAllUsers() {
  requestParam.method = 'GET';

  try {
    const response = await fetch(`${SERVER_URL}/users`, requestParam);
    return await responseHandler(response);
  } catch (e) {
    throw e
  }
}

async function getDelayLoadTodo(username) {
  requestParam.method = 'GET';

  try {
    const response = await fetch(`${SERVER_URL}/${username}?delay=5000`, requestParam);
    return await responseHandler(response);
  } catch (e) {
    throw e
  }
}

export { getTodo, addTodo, deleteAllTodo, updateTodoState, getAllUsers, getDelayLoadTodo };
