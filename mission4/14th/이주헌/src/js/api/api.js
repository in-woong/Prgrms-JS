
import {FETCH_POST_ERROR,FETCH_SELECT_ERROR,FETCH_DELETE_ERROR,FETCH_PUT_ERROR} from '../utils/keywords.js';
import LoadingSpinner from '../components/LoadingSpinner.js';

const BASE_URL='https://todo-api.roto.codes/';
const SPINNER = new LoadingSpinner(document.querySelector('body')); 


const request = async (endpoint,option={})=>{
        SPINNER.startSpinner();
        const response = await fetch(`${BASE_URL}${endpoint}`,option);
        if(!response.ok){
            throw new Error(response.statusText);
        }
        const json = await response.json();
        SPINNER.stopSpinner();
        return json;
        
};

const insertTodo = ({selectedUser,content})=>{
    try{
        const option = {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({content})
        }
        return request(`${selectedUser}`,option);
    }catch(e){
        console.error(e);
        alert(FETCH_POST_ERROR);
    }
};

const getTodo = async (selectedUser)=>{
try{
        let todoList = await request(`${selectedUser}`);
        const totalTodoCount = todoList.length;
        const completeTodoList = todoList.filter( ({isCompleted})=>isCompleted );
        return {
            todoList : todoList.filter( ({isCompleted}) => !isCompleted )
            ,completeTodoList
            ,completeTodoCount : completeTodoList.length
            ,totalTodoCount
        };
    }catch(e){
        console.error(e);
        alert(FETCH_SELECT_ERROR);
    }
}

const deleteTodo = ({selectedUser,todoId})=>{
    try{
        return request(`${selectedUser}/${todoId}`,{method:'DELETE'});
    }catch(e){
        console.error(e);
        alert(FETCH_DELETE_ERROR);
    }
}

const deleteTodoAll = (selectedUser)=>{
    try{
        return request(`${selectedUser}/all`,{method:'DELETE'});
    }catch(e){
        console.error(e);
        alert(FETCH_DELETE_ERROR);
    }
}

const completeTodo = ({selectedUser,todoId})=>{
    try{
        return request(`${selectedUser}/${todoId}/toggle`, {method:'PUT'})
    }catch(e){
        console.error(e);
        alert(FETCH_PUT_ERROR);
    }
}

const getUsers = ()=>{
    try{
        return request('users');
    }catch(e){
        console.error(e);
        alert(FETCH_SELECT_ERROR);
    }
}
export {insertTodo,getTodo,deleteTodo,completeTodo,deleteTodoAll,getUsers};
