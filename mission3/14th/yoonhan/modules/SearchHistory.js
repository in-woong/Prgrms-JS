import errorMessages from './errorMessages.js';

export function SearchHistory({ initialState, $target, onClick }) {
  if (!new.target) {
    throw new Error(errorMessages.WITHOUT_NEW);
  }

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const liTagsString = this.state.history
      .map(
        (historyText) => `
        <li data-search-text="${historyText}">${historyText}</li>
      `
      )
      .join('');
    $target.innerHTML = `
      <ul>
        ${liTagsString}
      </ul>
    `;
  };

  $target.addEventListener('click', onClick);

  this.render();
}
