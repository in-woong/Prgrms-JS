function TodoCount(count) {
  const $total = document.querySelector('#todo-total');
  const $completed = document.querySelector("#todo-completed");
  let completeCount = 0

  this.count = count
  this.countState = () => {
    completeCount = 0
    Array.from(document.querySelectorAll('.checkbox-input'), element = () => {
      element.addEventListener('click', e => {
        const $checkbox = e.currentTarget;
        console.log($checkbox.value);
      })
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

