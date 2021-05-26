function TodoCount(selector, data) {
  this.data = data;
  this.selector = selector;
  this.target = document.querySelector(this.selector);
  this.render = function() {
    const count = calculateToCount();
    this.target.innerHTML = `
      <span>총 갯수: ${count.total}</span>
      <span>완료 갯수: ${count.completed}</span>
   `
  }

  const calculateToCount = () => {
    const filteredList = this.data.filter((item) => item.isCompleted);

    const count = {total:this.data.length, completed:filteredList.length};
    return count;
  }

  this.render()
}

export default TodoCount
