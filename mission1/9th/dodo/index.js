import {data,data2,data3} from './modules/data.mjs';
import TodoList from './modules/TodoList.mjs';
   
   // render 테스트 
   const totalTodoList = [new TodoList(data,'todo-list'),new TodoList(data2,'todo-list2'),new TodoList(data3,'todo-list3')];

   // setState 테스트 
   const nextData = [
       {
           text:'새로운 데이터입니다',
           isCompleted:false
       }
   ]

   totalTodoList[0].setState(nextData);