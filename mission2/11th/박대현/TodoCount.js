function TodoCount(data, todoCountElem){
  this.render = () =>{
    todoCountElem.innerText = data.reduce((acc, item) => {
      return acc + (item.isCompleted ? 1 : 0);
    }, 0);
  }
}
export { TodoCount };