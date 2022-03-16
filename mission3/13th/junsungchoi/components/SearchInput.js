import { debounce } from "../uitls.js";

export default function SearchInput({ $target, initialState, onSearch }) {
  this.$target = $target;
  this.state = initialState;

  const $input = document.createElement('input');
  $input.id = 'search-keyword';
  $input.value = this.state.inputValue;
  this.$target.appendChild($input);

  this.render = function() {
    $input.value = this.state.inputValue;
  };

  $input.addEventListener('keyup', function(e) {
    debounce(() => onSearch(e.target.value), 500)
  });

  this.setState = function(nextState) {
    this.state = nextState;
    this.render();
  }

  this.render();
}
