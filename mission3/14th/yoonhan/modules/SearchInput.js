import errorMessages from './errorMessages.js';

export function SearchInput({ $target, onSubmit, onInput }) {
  if (!new.target) {
    throw new Error(errorMessages.WITHOUT_NEW);
  }

  $target.addEventListener('keyup', onInput);
  $target.addEventListener('submit', onSubmit);
}
