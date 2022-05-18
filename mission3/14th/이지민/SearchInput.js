export default function SearchInput({ onSubmit }) {
  this.$element = document.querySelector('form');

  this.$element.addEventListener('submit', (e) => {
    e.preventDefault();
    const $input = this.$element.querySelector('input');
    const searchText = $input.value;
    if (searchText.length > 0) {
      onSubmit(searchText);
      $input.value = '';
    }
  });
}
