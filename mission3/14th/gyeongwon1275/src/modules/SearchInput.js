export default function SearchInput({ $target, onInput, onSubmit }) {
  $target.addEventListener('submit', onSubmit);
  $target.addEventListener('input', onInput);
}
