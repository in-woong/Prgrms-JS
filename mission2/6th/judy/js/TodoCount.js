function TodoCount(count) {
  const $total = document.querySelector('#todo-total');
  const $completed = document.querySelector("#todo-completed");
  let completeCount = 0

  this.count = count
  this.countState = () => {
    completeCount = 0
    Array.prototype.forEach.call(document.querySelectorAll('.checkbox-input'), element = () => {
      let $checkbox = element.currentTarget;
      console.log(TodoList);

    })
  }

  this.render = () => {
    $total.innerHTML = this.count
    $completed.innerHTML = this.completeCount
  }

  this.setState = (nextData) => {
    this.count = nextData.length
    completeCount = this.countState(nextData)
    this.render()
  }
  this.render();

}

