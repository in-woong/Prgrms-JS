export default function ({ initialState, $target, onHistoryClick }) {
  this.state = initialState;

  document.querySelector($target).addEventListener('click', function (event) {
    onHistoryClick(event.target.textContent);
  });

  this.render = () => {
    const htmlString = `${this.state
      .map((history) => `<li>${history}</li>`)
      .join('')}`;

    document.querySelector($target).innerHTML = htmlString;
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render();
}
