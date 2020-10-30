import  TodoList  from './TodoList.js'
import { data, data2, data3 } from './data.js'

new TodoList("#todo-list", data);
new TodoList("#todo-list3", data3);

const todoList = new TodoList("#todo-list2", data2);

todoList.setState ([
    {
        text: '[mission1] 보너스 구현사항 - setState',
        isCompleted: false
    }
]);
