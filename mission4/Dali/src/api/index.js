import HttpError from '../utils/HTTPError.js';

const baseUrl = `http://todo-api.roto.codes`;

const addBaseUrl = url => `${baseUrl}/${url}`;

const makeUpdateToggleUrl = (username, id) => addBaseUrl(`${username}/${id}/toggle`);

const makeDeleteTodoUrl = (username, id) => addBaseUrl(`${username}/${id}/`);

const httpLog = data => console.log('Network success: Log', data);

const logError = error => console.log('Error:' , error);

const validateResponse = res => {
  if(!res.ok){
    throw HttpError(res);
  }
  return res;
};
const responseAsJson = res => res.json();

async function request(url, options = {method: 'GET'}){
   try {
     const res = await fetch(url, options);
     const validateRes = await validateResponse(res);
     const jsonData = await responseAsJson(validateRes);
     httpLog(jsonData);
     return jsonData
   }
   catch(error){
     logError(error);
     throw new HttpError(error)
   }
}

async function fetchData(username) {
  return await request(addBaseUrl(username));
}

async function toggleTodoComplete(username, id) {
    return await request(
                makeUpdateToggleUrl(username, id), {
                method: 'PUT'
              });
}

async function deleteTodo(username, id) {
    return await request(
        makeDeleteTodoUrl(username,id), {
        method: 'DELETE',
    });
}

async function addTodo(username, todoText){
    return await request(addBaseUrl(username), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: todoText,
      })}
    )
}


export default {
  fetchData,
  toggleTodoComplete,
  deleteTodo,
  addTodo
}
