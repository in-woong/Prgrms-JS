import TodoList from './TodoList.js';
import { todo, hobby, play, goalListId, travelListId, gameListId } from './data.js';
import { showError } from './utils.js';

try {
    new TodoList(todo, goalListId);
    new TodoList(hobby, travelListId);
    new TodoList(play, gameListId);    
} catch(err) {
    showError(err.message);
    console.log(`Invalid parameter : ${err.message}`);
}
