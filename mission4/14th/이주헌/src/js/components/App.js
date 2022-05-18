import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
import TodoCount from './TodoCount.js';
import Users from'./Users.js';

import {isCreateInstance as _isCreateInstance} from '../utils/validation.js';
import {insertTodo,getTodo,deleteTodo,completeTodo,deleteTodoAll,getUsers} from '../api/api.js';
import {INSTANCE_NOT_CREATED,LOADING_FAIL_TEXT} from '../utils/keywords.js';

export default function App($root){
    try{
        const isCreateInstance = _isCreateInstance.bind(this);
        if(!isCreateInstance(App)){
            throw(INSTANCE_NOT_CREATED);
        }

        this.init = async ()=>{
            const users = await getUsers();
            const {todoList, completeTodoList, completeTodoCount,totalTodoCount} = await getTodo(users[0]);
            
            this.state = {
                todoList,
                completeTodoList,
                completeTodoCount,
                totalTodoCount,
                selectedUser:users[0],
                users
            };
            this.setState=(nextState)=>{
                this.state = nextState;
    
    
                const { todoList, completeTodoList, completeTodoCount,totalTodoCount } = this.state;
    
                todoListComp.setState( todoList );
                completeTodoListComp.setState( completeTodoList );
                todoCountComp.setState({ completeTodoCount,totalTodoCount });
            }

            const $header = document.querySelector('header');


            const onDragStart = async e => {
                const todoId = e.target.dataset['id'];
                e.dataTransfer.setData('text/plain', todoId );
            }
            const onDrop = async e => {
                e.preventDefault();
                const todoId = e.dataTransfer.getData('text/plain');
                const {selectedUser} = this.state;
                await completeTodo({selectedUser,todoId});

                const {todoList,completeTodoList,completeTodoCount,totalTodoCount } = await getTodo(selectedUser);
                this.setState({selectedUser, todoList,completeTodoList,completeTodoCount,totalTodoCount })
            }
            const usersComp = new Users({
                $parentElement : $header 
                ,state:users
                ,onChange: async ({target})=>{
                    const selectedUser = target.selectedOptions[0].value;
                    const {todoList, completeTodoList, completeTodoCount,totalTodoCount} = await getTodo(selectedUser);
                    this.setState( {selectedUser, completeTodoList, todoList, completeTodoCount,totalTodoCount } );
                    
                }
                ,getSelectedUser:()=> usersComp.$parentElement.selectedOptions[0].value
                ,setState: data=>{
                    
                    usersComp.state = data ;
                    usersComp.render(this.state);
                    
                    
                }
            });
            const todoInputComp = new TodoInput({
                $parentElement : $header ,
                onSubmit:async event=>{
                    event.preventDefault();
                    const $input = event.target.querySelector('input');
                    const content = $input.value.trim();
                    const {selectedUser} = this.state;
                    if( !content ) {
                        alert(LOADING_FAIL_TEXT);
                        return;
                    }
                    await insertTodo({selectedUser, content})
                    const {todoList,completeTodoList, completeTodoCount,totalTodoCount } = await getTodo(selectedUser);
                    this.setState({ todoList,completeTodoList, completeTodoCount,totalTodoCount });

                    $input.value='';
                    $input.focus();
                    
                },
                removeAll:async ()=>{

                    const {selectedUser} = this.state;
                    await deleteTodoAll(selectedUser);
                    this.setState({ todoList:[],completeTodoList:[], completeTodoCount:0,totalTodoCount:0 });
                }
            });
            const todoListComp = new TodoList({
                $parentElement : $root,
                state:todoList,
                setState: data=>{
                    
                    todoListComp.state = data;
                    todoListComp.render(data);
                    
                    
                },
                onClick: async event=>{
                    event.preventDefault();
                    const target = event.target;
                    const { nodeName } = target;
                    const {selectedUser} = this.state;
                    let todoId = null;
                    if(target.closest('li')){
                        todoId = target.closest('li').dataset['id'];
                        if(nodeName === 'BUTTON'){
                            await deleteTodo( {selectedUser,todoId} );        
                        }
                        const {todoList,completeTodoList,completeTodoCount,totalTodoCount } = await getTodo(selectedUser);
                        this.setState({selectedUser, todoList,completeTodoList,completeTodoCount,totalTodoCount })
                    }
                }
                ,onDragStart
                ,onDrop
            });
            const completeTodoListComp = new TodoList({
                $parentElement : $root,
                state:completeTodoList,
                setState: data=>{
                    completeTodoListComp.state=data;
                    completeTodoListComp.render(data);
                },
                onClick: async event=>{
                    event.preventDefault();
                    const target = event.target;
                    const { nodeName } = target;
                    const {selectedUser} = this.state;
                    let todoId = null;
                    if(target.closest('li')){
                        todoId = target.closest('li').dataset['id'];
                        if(nodeName === 'BUTTON'){
                            await deleteTodo( {selectedUser,todoId} );        
                        }
                        const {todoList,completeTodoList,completeTodoCount,totalTodoCount } = await getTodo(selectedUser);
                        this.setState({selectedUser, todoList,completeTodoList,completeTodoCount,totalTodoCount })
                    }
                }
                ,onDragStart
                ,onDrop
            })
            const todoCountComp = new TodoCount({
                $parentElement:document.querySelector('footer'),
                state:{completeTodoCount,totalTodoCount},
                setState: data=>{
                    todoCountComp.state=data;

                    todoCountComp.render(data);
                }
            });
       } 
        this.init();
        
    }catch(e){
        alert(INSTANCE_NOT_CREATED);
    }
    
};
