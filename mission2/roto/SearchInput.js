function SearchInput($target, onChange) {
  let data = null;
  let timer = null;
  this.render = function() {
    $target.addEventListener("keyup", function(e) {
      data = e.target.value;

      // debounce
      clearTimeout(timer);
      timer = setTimeout(function(){
        onChange(data);
      }, 500)
    });
  };

  this.render();
}
