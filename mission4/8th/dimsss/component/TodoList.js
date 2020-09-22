export default function TodoList(appElement, initData) {
  this.init = () => {
    if (initData) {
      this.element = document.createElement('ul');
      this.element.id = 'todo-list';
  
      appElement.appendChild(this.element);
  
      this.state = initData;
      this.render(initData);
    }
  }

  this.render = (data) => {
    if (data) {
      this.element.innerHTML = `${data.map((todoItem) => { 
        if (!todoItem.isComplete) {
          return `<li id="${todoItem._id}" draggable="true">${todoItem.content}</li>`
        }}).join('')}`;
    } else {
      this.element.innerHTML = '';
    }
  }

  this.setState = (operation, newState) => {
    if (!this.element) {
      this.init();
    }

    switch(operation) {
      case 'add':
        this.state = [...this.state, newState];
        break;
      case 'delete':
        this.state = this.state.filter((item) => { if (item._id !== newState._id) return item });
        break;
      case 'get':
        for (let i = 0; i < this.state.length; i++) {
          if (newState === this.state[i]._id) {
            return this.state[i];
          }
        }
        break;
      case 'allDelete':
        this.state = newState;
        break;
      default:
        this.state = newState;
    }
    this.render(this.state);
  }

  this.init();
}
