function TodoCount(targetElement, todos) {
  this.target = targetElement;
  this.data = todos;

  this.render = function (data) {
    console.log(data)
    const countOfCompleted = data.reduce((acc, cur) => {
      if (cur.isCompleted) {
        acc += 1;
      }
      return acc
    }, 0);
    
    this.target.innerHTML = (
      `<span>
      Total: ${data.length} 완료: ${countOfCompleted}
      </span>`
    );
  }

  this.render(this.data);
};

export default TodoCount;
