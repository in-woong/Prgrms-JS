export default function SearchInput($target, onSearch) {
  const $app = document.getElementById('app')

  const $form = document.createElement('form');
  $app.appendChild($form);

  const $SearchInput = document.getElementById('search-keyword');
  $form.appendChild($SearchInput);

  this.$target = $SearchInput

  $SearchInput.addEventListener('keyup', (e) => {
    const value = e.target.value;
    this.onSearch(value);
  })

  this.setState = function(nextData){
    this.data = nextData;
    this.render()
  }
}
