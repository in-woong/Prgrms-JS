export default function SearchInput({ $target, onSearch }) {
  let timer = null;
  $target.addEventListener("keyup", function(e) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      const searchKeyword = e.target.value

      if (searchKeyword) {
        onSearch(e.target.value)
      }

    }, 500);
    })
}
