import { debounce } from '../utils/index.js';

export default function SearchInput({ target, searchGif, setState }) {
  this.$target = target;

  this.$target.addEventListener(
    'keyup',
    debounce(async (event) => {
      const text = event.target.value;
      const jjals = await searchGif(text);
      setState({ jjals, text });
      event.target.value = '';
      event.target.blur();
      event.target.focus();
    }, 550)
  );
}
