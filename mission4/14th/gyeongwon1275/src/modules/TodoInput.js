export default function TodoInput({ onSubmit, onClick, handleRemoveAll }) {
  document.querySelector('form').addEventListener('submit', onSubmit);

  const $button = document.querySelector('button[name="remove-all"]');

  $button.addEventListener('click', onClick);
  $button.addEventListener('removeAll', handleRemoveAll);
}
