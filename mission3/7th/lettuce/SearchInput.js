function SearchInput($target, onKeyup) {
  if (!(this instanceof SearchInput)) {
    throw new Error("Call with 'new'");
  }
  $target.addEventListener('keyup', onKeyup);
}

export default SearchInput;
