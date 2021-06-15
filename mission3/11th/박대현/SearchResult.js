export default function(data){
  const $result = document.createElement('section');
  $result.className = "result";
  this.element = $result;
  this.data = data;

  this.render = () => {
    $result.innerHTML = 
      this.data.reduce(
        (acc,item) => acc + `<figure><img src="${item.imageUrl}" loading="lazy"></figure>`
      , '');
  }

  this.setState = newData => {
    this.data = [...newData];
    this.render();
  }
}
