export default function SearchHistory({ $target, history, onClick }) {
  if (!history) return;

  this.render = history => {
    $target.querySelector('ul.search-history')?.remove();

    $target.insertAdjacentHTML(
      'afterbegin',
      `<ul class="search-history">
${history.map(text => `<li>${text}<li>`)}
    </ul>`
    );

    $target
      .querySelector('ul.search-history')
      .addEventListener('click', onClick);
  };
}
