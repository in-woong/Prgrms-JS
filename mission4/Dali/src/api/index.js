import HttpErrorHandler from '../utils/HttpErrorHandler.js';
const baseUrl = `http://todo-api.roto.codes`;



async function request(url, options = {method: 'GET'}){
  const baseUrl = `http://todo-api.roto.codes`;
  try {
    const res = await fetch(`${baseUrl}/${url}`, options);
    const data = await res.json();
    if(res.ok){
      return {
        isError: false,
        data,
      }
    }else {
      return {
        isError: true,
        message: data.message,
        statusCode: data.status
      }
    }
  }catch(err){
    return {
      isError: true,
      message: data.message,
      statusCode: data.status
    }
  }
}

async function fetchData(username) {
  try {
   const resData = await request(username);
   if(!resData.isError) return resData;
   else {
     return resData;
   }
  }
  catch(error){
    HttpErrorHandler(error);
  }
}

async function toggleTodoComplete(username, id) {
  try {
    return await fetch(`${baseUrl}/${username}/${id}/toggle`, {
      method: 'PUT',
    });
  }
  catch(error){
    throw new Error(error);
  }
}

async function deleteTodo(username, id) {
  try {
    return await fetch(`${baseUrl}/${username}/${id}`, {
      method: 'DELETE',
    });
  }
  catch(error){
    throw new Error(error);
  }
}

async function addTodo(username, todoText){
  try {
    const res = await fetch(`${baseUrl}/${username}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: todoText,
      }),
    })
  }catch(error){
    throw new Error(error);
  }
}


export default {
  fetchData,
  toggleTodoComplete,
  deleteTodo,
  addTodo
}
