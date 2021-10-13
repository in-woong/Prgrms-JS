function TodoCount(todoCountElem){
  this.render = todoListData =>{
    todoCountElem.innerText = todoListData.reduce((acc, item) => {
      return acc + (item.isCompleted ? 1 : 0);
    }, 0);
  }
}
export { TodoCount };