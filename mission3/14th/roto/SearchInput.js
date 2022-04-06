import { debounce } from './utils.js';

export default function SearchInput({ $target, initialState, onChange }) {
  this.state = initialState;

  this.$element = document.createElement('input');
  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.value = this.state;
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render();

  const debounceHandleKeyup = debounce((e) => {
    onChange(e.target.value);
  }, 300);
  this.$element.addEventListener('keyup', debounceHandleKeyup);
}
