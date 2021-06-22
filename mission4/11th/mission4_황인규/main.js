import TodoList from "./components/TodoList.js";
import TodoInput from "./components/TodoInput.js";
import UserList from "./components/UserList.js";

import {onTodoApi} from "./api/api.js"
import {$} from "./utils/utils.js";


function main($app, initialData) {
        
    this.$state = initialData;
    
    this.username = 'hwangingyu';
  
    const onGetTodo = async(username) => {
        try{
            const response =  await onTodoApi.onGetTodo(username, 300);
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


    const onGetUserList = async() => {
        try{
            const response = await onTodoApi.onGetUserList();
            if(response)
                return response;
        }catch(error){
            console.log(error);
        }
    }

    const getUserList = new UserList({
        $target: $('#user-list'),
        data : [],
        users :  async() => {
            const updatedUserData = await onGetUserList();
            const newData = {
                data : [...updatedUserData],
                isLoading : true,
            }
            getUserList.setState(newData);    
        },
        onClick: async(username) => {
            const previousData = {
                data : [],
                isLoading : false,
            };
            todoList.setState(previousData);
            const updatedData = await onGetTodo(username);
            
            const updatedUserData = await onGetUserList();
            
            const newUserData = {
                data : [...updatedUserData],
                username : username,
                isLoading : true,
            }
            
            const newData = {
                data : [...updatedData],
                username : username,
                isLoading : true,
            }
            
            getUserList.setState(newUserData);   
            todoList.setState(newData);
            this.$state.username = username;
        }
    });
    
    const todoList = new TodoList({
      $target: $('#todo-list'),
      data: [],
      onClick: async(id) => {
        await onToggleTodo(this.$state.username, id);
        
        const updatedData = await onGetTodo(this.$state.username);
        const newData = {
            data : [...updatedData],
            username : this.$state.username,
            isLoading : true,
        }
        todoList.setState(newData);
      },
      onRemove: async(id) => {
      
            await onDeleteTodo(this.$state.username, id);

            const updatedData = await onGetTodo(this.$state.username);
        
            const newData = {
                data : [...updatedData],
                username : this.$state.username,
                isLoading : true,
            }

        
            todoList.setState(newData);
        
      },
    });
  
    const todoInput = new TodoInput({
        $targetButton : $('#add-todo-button'),
        $targetInput : $('#todo-input'),
        onInput : async(value) => {
            const previousData = {
                data : [],
                username : this.$state.username,
                isLoading : false,
            }
            todoList.setState(previousData);

            await onAddTodo(this.$state.username, value);
            const updateData = await onGetTodo(this.$state.username);
            const updatedUserData = await onGetUserList();

            const newUserData = {
                data : [...updatedUserData],
                username : this.$state.username,
                isLoading : true,
            }
            
            const newData = {
                data : [...updateData],
                username : this.$state.username,
                isLoading : true,
            }
            getUserList.setState(newUserData);  
            todoList.setState(newData);

        }
    })

    
  }

export default main;