function TodoCount(getTotalCount, getCompletedCount) {
  this.$count = document.getElementById("count");
  this.getTotalCount = getTotalCount;
  this.getCompletedCount = getCompletedCount;

  this.setState = nextData => {
    this.todos = nextData;
    this.render();
  };

  this.render = () => {
    this.$count.innerHTML = `총 Todo의 개수 : ${this.getTotalCount()} / 완료된 Todo의 개수 : ${this.getCompletedCount()}`;
  };
}

export default TodoCount;
