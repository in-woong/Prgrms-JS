export default function App({ $app, initialState }) {
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
    const htmlString = `${this.state.map(d => `<img src="${d.imageUrl}">`).join('')}`
    this.$target.innerHTML = htmlString
  }
  
}