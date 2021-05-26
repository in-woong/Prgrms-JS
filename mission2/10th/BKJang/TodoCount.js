function TodoCount(targetElement, todos) {
  this.target = targetElement;
  this.data = todos;

  this.render = function (data) {
    const completedList = data.filter(item => item.isCompleted);

    this.target.innerHTML = (
      `<span>
      Total: ${data.length} 완료: ${completedList.length}
      </span>`
    );
  }

  this.render(this.data);
};

export default TodoCount;
