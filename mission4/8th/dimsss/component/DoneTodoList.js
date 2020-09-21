export default function DoneTodoList(parentElement, initData) {
  this.init = () => {

    if (initData) {
      this.element = document.createElement('ul');
      this.element.id = 'done-todo-list';
      this.state = initData;
      
      parentElement.appendChild(this.element);
  
      this.render(initData);
    }
  }

  this.render = (data) => {
    this.element.innerHTML = `${data.map((todoItem) => {
      if (todoItem.isCompleted) return `<li id="${todoItem._id}" draggable="true">${todoItem.content}</li>`;
    }).join('')}`
  }

  this.setState = (operation, newState) => {
    if (!this.element) {
      this.init();
      return;
    }

    switch(operation) {
      case 'add':
        this.state = [...this.state, newState];
        break;
      case 'delete':
        this.state = this.state.filter((item) => { if (item._id !== newState._id) return item })
        break;
      case 'get':
        for (let i = 0; i < this.state.length; i++) {
          if (newState === this.state[i]._id) {
            return this.state[i];
          }
        }
        break;
      default:
        this.state = newState;
    }

    this.render(this.state);
  }

  this.init();
}
