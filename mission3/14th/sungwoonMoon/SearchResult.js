export default function ({ initialState, $target }) {
  this.state = initialState;

  this.render = () => {
    const htmlString = `${this.state
      .map((d) => `<img src="${d.imageUrl}">`)
      .join('')}`;

    document.querySelector($target).innerHTML = htmlString;
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render();
}
