import errorMessages from './errorMessages.js';

export function SearchResult({ initialState, $target }) {
  if (!new.target) {
    throw new Error(errorMessages.WITHOUT_NEW);
  }

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (initialState.length === 0) {
      return;
    }

    const liTagsString = this.state.imagesData
      .map(
        (imageData) => `
        <li>
          <img src=${imageData.imageUrl} />
        </li>
      `
      )
      .join('');
    $target.innerHTML = `<ul>${liTagsString}</ul>`;
  };

  this.render();
}
