import { data1, data2, data3, data4 } from './data.js';
import TodoList from './TodoList.js';



// 인스턴스를 생성하고 랜더링을 수행합니다.
const todoList1 = new TodoList(data1, '#todo-list1');
const todoList2 = new TodoList(data2, '#todo-list2');
const todoList3 = new TodoList(data3, '#todo-list3');

todoList1.setState(data4);