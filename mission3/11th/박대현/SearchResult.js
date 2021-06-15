export default function(data){
  const $result = document.createElement('div');

  this.element = $result;
  this.data = data;

  this.render = () => {
    // console.log(JSON.stringify(this.data, null, 2))
    $result.innerHTML = `${
        this.data.reduce(
          (acc,item) => acc + `<img src="${item.imageUrl}">`
        , '')
    }`
  }

  this.setState = newData => {
    this.data = newData;
    this.render();
  }
}
