export default function(data) {
  const $history = document.createElement('div');
  
  this.data = data;
  this.element = $history;
  this.render = () => {
    $history.innerHTML = this.data.reduce((acc,item) => acc+`<span>${item}</span>` ,'');
  }
  this.setState = newData => {
    this.data = newData;
    this.render();
  }
  this.addHistory = newHistory => {
    this.setState([...this.data, newHistory]);
  }
}