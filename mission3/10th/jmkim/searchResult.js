export default function SearchResult({ $app, initialState }) {
  this.state = initialState;
  const $target = document.createElement('div');
  $target.id = 'search-result';
  $app.appendChild($target);
  this.$target = $target;
  
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.render = () => {
    const htmlString = `${this.state.map((data) => {
      console.log(data);
      return `<img src="${data.imageUrl}" width="150px">`
    }).join('')}`;
    this.$target.innerHTML = htmlString;
  }

}






















































// export default function SearchResult({ $app, initialState }) {
//   this.state = initialState;
//   const $target = document.createElement('div');  
//   $target.id = 'search-result';
//   $app.appendChild($target);

//   this.$target = $target;

//   this.setState = (nextState) => {
//     this.state = nextState;
//     this.render();
//   }

//   this.render = () => {
//     const htmlString = `${this.state.map((d) => `<img src="${d.imageUrl}" width="50px">`).join('')}`;
//     this.$target.innerHTML = htmlString;
//   }
// }