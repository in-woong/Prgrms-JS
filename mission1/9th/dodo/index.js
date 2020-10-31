import dataList from './modules/data.mjs';
import TodoList from './modules/TodoList.mjs';
   
dataList.forEach(({data,listId})=>new TodoList(data,listId));

   