import UserList from './UserList.js';
import TodoContainer from './ListContainer.js';
import Spinner from './Spinner.js';

import { getDelayLoadTodo } from '../util/api.js';

export default function App() {
  this.element = document.querySelector('#app');

  this.setState = (userElement, allTodoData) => {
    const [todoData, doneTodoData] = this.todoContainerComponent.splitTodoData(allTodoData);

    this.todoContainerComponent.todoUser = userElement.id;
    
    this.todoContainerComponent.setState(undefined, {todoData, doneTodoData})
    
    this.userListComponent.displayTodoUser(userElement);
    this.currentTodoUser = userElement;
  }

  this.userListComponent = new UserList(this.element);
  this.todoContainerComponent = new TodoContainer(this.element, undefined);
  

  this.element.addEventListener('click', async (e) => {
    if (e.target.parentNode.id === 'user-list') {
      if (this.currentTodoUser) {
        this.userListComponent.hideTodoUser(this.currentTodoUser)
      } else {
        this.currentTodoUser = e.target;
      }

      const username = e.target.id;
      this.element.insertAdjacentElement('afterbegin', Spinner());
      const allTodoData = await getDelayLoadTodo(username);
      this.element.removeChild(this.element.childNodes[0]);
      this.setState(e.target, allTodoData);
    }
  })
}
