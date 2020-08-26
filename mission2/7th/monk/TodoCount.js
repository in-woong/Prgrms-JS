function TodoCount({ data, elementId }){
  this.data = data;
  this.$target = document.querySelector(`#${elementId}`);
  
  this.setState = (nextData) => {
    this.data = nextData;
    this.render();
  }
  this.render = () => {
    this.$target.innerHTML = `Total: ${this.data.length} / 
    Completed: ${this.data.filter(item => item.isCompleted).length}`
  }
  this.render();
}
