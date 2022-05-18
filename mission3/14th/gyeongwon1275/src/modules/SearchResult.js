export default function SearchResult({ $target, initialState }) {
  this.render = state => {
    if (!state.length) return;

    document.querySelector('ul.result')?.remove();

    $target.insertAdjacentHTML(
      'beforeend',
      `<ul class="result">
           ${state.map(
             ({ _id, imageUrl, title }) =>
               `<li key=${_id}><img src=${imageUrl} alt=${title} ></li>`
           )}
        </ul>`
    );
  };

  this.render(initialState);
}
