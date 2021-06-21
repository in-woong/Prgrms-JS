import TodoList from "./components/TodoList.js";
import TodoInput from "./components/TodoInput.js";
import {onTodoApi} from "./api/api.js"
import {$} from "./utils/utils.js";


function main($app, initialData) {
    
    this.$state = initialData;

    const username = 'roto';
  
    const onGetTodo = async(username) => {
        try{
            const response =  await onTodoApi.onGetTodo(username);
            if(response)
                return response;
        }catch(error){
            console.log(error);
        }
    };

    const onAddTodo = async(username, value) => {
        try{
            const response = await onTodoApi.onAddTodo(username, value);
        }catch(error){
            console.log(error);
        }
    };
    
    const onToggleTodo = async(username, id) => {
        try{
            const response = await onTodoApi.onToggleTodo(username, id);
        }catch(error){
            console.log(error);
        }
    };

    const onDeleteTodo = async(username, id) => {
        try{
            const response = await onTodoApi.onDeleteTodo(username, id);
        }catch(error){
            console.log(error);
        }
    };

    const onDeleteTodoAll = async(username) => {
        try{
            const response = await onTodoApi.onDeleteTodoAll(username);
        }catch(error){
            console.log(error);
        }
    };


    
    
    const todoList = new TodoList({
      $target: $('#todo-list'),
      data: [],
      onClick: async function (id) {
        onToggleTodo(username, id);
        
        // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
        const updatedData = await onGetTodo(username);
        
        todoList.setState(updatedData);
      },
      onRemove: async function (id) {
        // await fetch(`https://todo-api.roto.codes/${username}/${id}`, {
        //   method: 'DELETE',
        // });
        onDeleteTodo(username, id);
        // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
        const updatedData = await onGetTodo(username);
        todoList.setState(updatedData);
      },
    });
  

    const todoInput = new TodoInput({
        $targetButton : $('#add-todo-button'),
        $targetInput : $('#todo-input'),
        onInput : async function(value) {
            const previousData = {
                isLoading : false,
            }
            todoList.setState(previousData);

            onAddTodo(username, value);
            const updateData = await onGetTodo(username);
            todoList.setState(updateData);
        }
    })
    // document
    //   .querySelector('#add-todo-button')
    //   .addEventListener('click', async function () {
    //     const todoText = document.querySelector('#todo-input').value;
  
    //     if (todoText.length > 0) {
    //       // 데이터 추가하기
    //       await fetch(`https://todo-api.roto.codes/${username}`, {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //           content: todoText,
    //         }),
    //       });
  
    //       // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
    //       const updatedData = await fetchData();
    //       todoList.setState(updatedData);
    //     }
    //   });
  }

export default main;