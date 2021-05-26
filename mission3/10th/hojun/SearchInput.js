function SearchInput($target, { fetchData }) {
  $target.addEventListener('keyup', (e) => {
    fetchData(e.target.value);
  });
}
export default SearchInput;
