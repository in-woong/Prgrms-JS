export default class TodoList{
  constructor(params){
    this.target = params.$target;
    this.onClick = params.onClick;
    this.onRemove = params.onRemove;
    this.data = params.receivedData || [];
    console.log(this.data);

    this.render();
  }

  setState(newData){
    this.data = newData;
    console.log(this.data);
    this.render();
  }

  render(){
    const htmlString = this.data.map((todo) => {
      const contentHTML = todo.isCompleted
        ? `<strike>${todo.content}</strike>`
        : `${todo.content}`

      return `<li data-id="${
        todo._id
      }">${contentHTML} <button class="remove-button">Remove</button></li>`
    })
    this.target.innerHTML = `<ul>${htmlString.join('')}</ul>`
  }
}

